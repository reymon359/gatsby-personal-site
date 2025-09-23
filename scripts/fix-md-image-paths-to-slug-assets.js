/* eslint-disable @typescript-eslint/no-require-imports */
// scripts/fix-md-image-paths-to-slug-assets.js
const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, '../content/posts');

fs.readdirSync(postsDir).forEach(slug => {
    const postDir = path.join(postsDir, slug);
    const mdFile = path.join(postDir, 'index.md');
    if (fs.existsSync(mdFile)) {
        let content = fs.readFileSync(mdFile, 'utf8');
        // Replace (assets/filename) or (./assets/filename) with (/content/posts/[slug]/assets/filename)
        content = content.replace(
            /(\]\()(\.?\/?assets\/[^)]+)\)/g,
            `](/content/posts/${slug}/assets/$2)`.replace('$2', '$2')
        );
        // Clean up any double assets path
        content = content.replace(/\/assets\/assets\//g, '/assets/');
        fs.writeFileSync(mdFile, content, 'utf8');
        console.log(`Fixed image paths in ${slug}/index.md`);
    }
});
console.log('All markdown image paths updated to use /content/posts/[slug]/assets/...');