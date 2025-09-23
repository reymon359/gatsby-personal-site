/* eslint-disable @typescript-eslint/no-require-imports */
// fix-all-markdown-image-paths.js
// Recursively updates all markdown image paths in content/posts/[slug]/index.md to absolute public paths
// Usage: node scripts/fix-all-markdown-image-paths.js


const fs = require('fs-extra');
const path = require('path');

const POSTS_DIR = path.join(__dirname, '../content/posts');


function getAllMarkdownFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(filePath));
    } else if (file === 'index.md') {
      results.push(filePath);
    }
  }
  return results;
}

function fixImagePathsInMarkdown(mdPath, slug) {
  let content = fs.readFileSync(mdPath, 'utf8');
  // Regex to match ![alt](...)
  content = content.replace(/!\[(.*?)\]\(([^)]+)\)/g, (match, alt, origPath) => {
    let cleanPath = origPath;
    // Remove leading ./ or ../
    cleanPath = cleanPath.replace(/^\.\/?/, '').replace(/^\.\./, '');
    // Collapse multiple assets/ (e.g., assets/assets/ -> assets/)
    cleanPath = cleanPath.replace(/(assets\/)+/g, 'assets/');
    // Remove any leading './' or 'assets/./'
    cleanPath = cleanPath.replace(/assets\/\.\//g, 'assets/');
    // Remove any leading './' again
    cleanPath = cleanPath.replace(/^\.\//, '');
    // Remove any duplicate slashes
    cleanPath = cleanPath.replace(/\/+/g, '/');
    // Remove all occurrences of /content/posts/[slug]/ in the path
    const absPrefix = `/content/posts/${slug}/`;
    const absPrefixRegex = new RegExp(`(\\/)?content\\/posts\\/${slug}\\/`, 'g');
    cleanPath = cleanPath.replace(absPrefixRegex, '');
    // Ensure the path starts with a single absPrefix
    let absPath = absPrefix + cleanPath.replace(/^\/+/, '');
    // Remove any accidental double slashes
    absPath = absPath.replace(/\/+/g, '/');
    absPath = absPath.replace(/ /g, '%20');
    return `![${alt}](${absPath})`;
  });
  fs.writeFileSync(mdPath, content, 'utf8');
}

function main() {
  const mdFiles = getAllMarkdownFiles(POSTS_DIR);
  for (const mdPath of mdFiles) {
    const slug = path.basename(path.dirname(mdPath));
    fixImagePathsInMarkdown(mdPath, slug);
    console.log(`Updated image paths in: ${mdPath}`);
  }
  console.log('All markdown image paths updated.');
}

main();
