/* eslint-disable @typescript-eslint/no-require-imports */
// scripts/fix-content-md-image-paths.js
const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, '../content/posts');

fs.readdirSync(postsDir).forEach(slug => {
    const postDir = path.join(postsDir, slug);
    const mdFile = path.join(postDir, 'index.md');
    if (fs.existsSync(mdFile)) {
        let content = fs.readFileSync(mdFile, 'utf8');
        // Replace (./filename.jpg), (filename.jpg), (assets/filename.jpg), (./assets/filename.jpg)
        // Handles spaces and unicode in filenames
        content = content.replace(
            /(\]\()(\.?\/)?((assets\/)?[\\w\\d\\- _.,’'“”()\\u00C0-\\u024F]+\\.(jpg|jpeg|png|gif|webp))\)/gi,
            `](/content/posts/${slug}/$3)`
        );
        fs.writeFileSync(mdFile, content, 'utf8');
        console.log(`Fixed image paths in ${slug}/index.md`);
    }
});
console.log('All markdown image paths updated to use /content/posts/[slug]/...');