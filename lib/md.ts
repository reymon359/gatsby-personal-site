import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

function getMarkdownFiles(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getMarkdownFiles(filePath));
    } else if (file === 'index.md' || file.endsWith('.md')) {
      results.push(filePath);
    }
  });
  return results;
}

function getPostOrProjectByFile(filePath: string) {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const dir = path.dirname(filePath);

  // Resolve image path if present
  let image;
  if (data.image || data.featuredImage) {
    const imgName = data.image || data.featuredImage;
    // Remove leading './' or '.\\' if present
    const imgFile = imgName.replace(/^\.\//, '').replace(/^\.\\/, '');
    // Determine if this is a post or project by checking the file path
    let type = '';
    if (filePath.includes(`${path.sep}posts${path.sep}`)) {
      type = 'posts';
    } else if (filePath.includes(`${path.sep}projects${path.sep}`)) {
      type = 'projects';
    }
    if (type) {
      image = `/content/${type}/${path.basename(dir)}/${imgFile}`;
    }
  }

  // Format date as 'Month Day, Year' if possible
  let formattedDate = data.date;
  if (data.date) {
    const d = new Date(data.date);
    if (!isNaN(d.getTime())) {
      formattedDate = d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }
  }
  return {
    slug: data.slug || path.basename(dir),
    meta: {
      title: data.title,
      date: formattedDate,
      slug: data.slug || path.basename(dir),
      ...(data.description ? { description: data.description } : {}),
      ...(data.tags ? { tags: data.tags } : {}),
      ...(data.type ? { type: data.type } : {}),
      ...(data.url ? { url: data.url } : {}),
      ...(data.commentsUrl ? { commentsUrl: data.commentsUrl } : {}),
    },
    image,
    content,
  };
}

export function getAllPosts() {
  const postsDir = path.join(process.cwd(), 'content/posts');
  const files = getMarkdownFiles(postsDir);
  const posts = files.map(getPostOrProjectByFile).sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
  return posts;
}

export function getAllProjects() {
  const projectsDir = path.join(process.cwd(), 'content/projects');
  const files = getMarkdownFiles(projectsDir);
  const projects = files.map(getPostOrProjectByFile).sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
  return projects;
}

// Returns all post slugs
export function getPostSlugs() {
  const postsDir = path.join(process.cwd(), 'content/posts');
  const files = getMarkdownFiles(postsDir);
  return files.map(file => {
    // Assuming slug is the folder name or filename without extension
    const dir = path.dirname(file);
    return path.basename(dir);
  });
}

// Returns a single post by slug
export function getPostBySlug(slug: string) {
  const postsDir = path.join(process.cwd(), 'content/posts');
  const files = getMarkdownFiles(postsDir);
  const file = files.find(f => path.basename(path.dirname(f)) === slug);
  if (!file) return null;
  return getPostOrProjectByFile(file);
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
