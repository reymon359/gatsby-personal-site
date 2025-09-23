/* eslint-disable @typescript-eslint/no-require-imports */
// scripts/check-markdown-images.js
// Checks all image references in markdown files and verifies if the files exist in public
const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, '../public/content/posts');
const publicDir = path.join(__dirname, '../public');
const imageRegex = /!\[[^\]]*\]\(([^)]+)\)/g;

let missing = [];

fs.readdirSync(postsDir).forEach(file => {
  if (file.endsWith('.md')) {
    const filePath = path.join(postsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    let match;
    while ((match = imageRegex.exec(content)) !== null) {
      const imgPath = match[1].split('?')[0].split('#')[0]; // Remove query/hash
      if (imgPath.startsWith('/')) {
        const absImgPath = path.join(publicDir, imgPath);
        if (!fs.existsSync(absImgPath)) {
          missing.push({ md: file, img: imgPath });
        }
      }
    }
  }
});

if (missing.length === 0) {
  console.log('All markdown image references exist in public!');
} else {
  console.log('Missing images:');
  missing.forEach(({ md, img }) => {
    console.log(`In ${md}: ${img}`);
  });
}
