import slugify from 'slugify';
import { ContentList } from '@/components/ContentList';
import { getAllPosts, getAllProjects } from '@/lib/md';

// Helper to get all unique tags
function getAllTags() {
  const posts = getAllPosts();
  const projects = getAllProjects();
  const tagSet = new Set<string>();
  for (const item of [...posts, ...projects]) {
    if (item.meta.tags && Array.isArray(item.meta.tags)) {
      for (const tag of item.meta.tags) {
        tagSet.add(tag);
      }
    }
  }
  return Array.from(tagSet);
}

// Helper to get all works (posts + projects) for a slugified tag
function getWorksBySlugTag(slugTag: string) {
  const posts = getAllPosts();
  const projects = getAllProjects();
  return [...posts, ...projects]
    .filter(item =>
      item.meta.tags &&
      item.meta.tags.some((tag: string) => slugify(tag, { lower: true, strict: true }) === slugTag)
    )
    .map(item => ({
      title: item.meta.title,
      slug: item.slug,
      date: item.meta.date,
      type: item.meta.type || 'work',
      ...(item.meta.description ? { description: item.meta.description } : {}),
      ...(item.meta.tags ? { tags: item.meta.tags } : {}),
      url: item.meta.url || '',
      image: item.image || '',
    }));
}

export async function  generateStaticParams() {
const tags = await getAllTags();
  return tags.map(tag => ({ tag: slugify(tag, { lower: true, strict: true }) }));
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const works = getWorksBySlugTag(tag);

  if (!works.length) return <div className="max-w-4xl mx-auto py-10 px-4 mt-24 text-center text-gray-500">No works found for this tag.</div>;

  // Find the original tag label for display
  const allTags = getAllTags();
  const displayTag = allTags.find(t => slugify(t, { lower: true, strict: true }) === tag) || tag;

  return (
    <main className="max-w-4xl mx-auto py-10 px-4 mt-24 relative z-30">
      <header className="mb-12 px-4 flex flex-col gap-2">
        <h1 className="text-3xl">Works tagged &quot;{displayTag}&quot;</h1>
        <p className="text-gray-400 font-light text-lg">All posts and projects with this tag</p>
      </header>
      <section>
        <ContentList content={works} type={true} />
      </section>
    </main>
  );
}
