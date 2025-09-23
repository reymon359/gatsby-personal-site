/* eslint-disable @typescript-eslint/no-require-imports */
// scripts/copy-images.js
// @ts-expect-error yes
const fs = require('fs-extra');
const path = require('path');

const srcProjects = path.join(process.cwd(), 'content/projects');
const destProjects = path.join(process.cwd(), 'public/content/projects');
fs.copySync(srcProjects, destProjects, {
    filter: (src) => !src.endsWith('.md'),
});

const srcPosts = path.join(process.cwd(), 'content/posts');
const destPosts = path.join(process.cwd(), 'public/content/posts');
fs.copySync(srcPosts, destPosts, {
    filter: (src) => !src.endsWith('.md'),
});

console.log('Images copied to /public/content/projects and /public/content/posts');
