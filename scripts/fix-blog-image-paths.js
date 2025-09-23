/* eslint-disable @typescript-eslint/no-require-imports */
// scripts/fix-blog-image-paths.js
// This script updates all /blog/assets/ image paths in markdown files to /content/posts/assets/
const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, '../public/content/posts');

fs.readdirSync(postsDir).forEach(file => {
  if (file.endsWith('.md')) {
    const filePath = path.join(postsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    // Replace all (/blog/assets/...) with (/content/posts/assets/...)
    content = content.replace(/\(\/blog\/assets\//g, '(/content/posts/assets/');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed image paths in ${file}`);
  }
});
console.log('All /blog/assets/ image paths updated to /content/posts/assets/.');
