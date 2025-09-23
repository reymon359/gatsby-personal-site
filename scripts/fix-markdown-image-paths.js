/* eslint-disable @typescript-eslint/no-require-imports */
// scripts/fix-markdown-image-paths.js
// This script updates all image paths in markdown files to point to /content/posts/assets/
const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, '../public/content/posts');
const assetPrefix = '/content/posts/assets/';

fs.readdirSync(postsDir).forEach(file => {
  if (file.endsWith('.md')) {
    const filePath = path.join(postsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    // Replace all ![...](assets/...) or ![...](./assets/...) or ![...](../assets/...) with ![...](your public path)
    content = content.replace(/\]\((\.?\/?assets\/[\w\-.]+)\)/g, `](${assetPrefix}$1)`);
    // Also handle any direct references like (assets/filename.jpg), (./assets/filename.jpg), (../assets/filename.jpg)
    content = content.replace(/\((?:\.\.\/|\.\/)?assets\//g, `(${assetPrefix}`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated image paths in ${file}`);
  }
});
console.log('All markdown image paths updated to use /content/posts/assets/.');
