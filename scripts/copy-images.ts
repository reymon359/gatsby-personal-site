import fs from 'fs-extra';
import path from 'path';

const src = path.join(process.cwd(), 'content/projects');
const dest = path.join(process.cwd(), 'public/content/projects');

fs.copySync(src, dest, {
    filter: (src: string) => !src.endsWith('.md'),
});

console.log('Images copied to /public/content/projects');