import { ContentList } from '@/components/ContentList';
import { getAllPosts, getAllProjects } from '@/lib/md';
import Link from 'next/link';

export default function WorksPage() {
  // Blog posts from markdown
  const posts = getAllPosts()
    .map((post) => ({
      title: post.meta.title,
      slug: post.slug,
      date: post.meta.date,
      type: post.meta.type || 'post',
      ...(post.meta.description ? { description: post.meta.description } : {}),
      ...(post.meta.tags ? { tags: post.meta.tags } : {}),
      url: post.meta.url || '',
      image: post.image || '',
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const projects = getAllProjects()
    .map((project) => ({
      title: project.meta.title,
      slug: project.slug,
      date: project.meta.date,
      type: project.meta.type || 'project',
      ...(project.meta.description ? { description: project.meta.description } : {}),
      ...(project.meta.tags ? { tags: project.meta.tags } : {}),
      url: project.meta.url || '',
      image: project.image || '',
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <main className="max-w-4xl mx-auto py-10 px-4 my-24 mb-40 relative z-30">
      <header className="mb-12 px-4 flex flex-col gap-2">
        <h1 className="text-3xl">Works</h1>
        <p className="text-gray-400 font-light text-lg">What I do and write about</p>
      </header>
      <section className="mb-10 ">
        <div className="flex items-center px-4 mb-4">
          <h2 className="text-2xl ">Latest projects</h2>
          <div className='flex gap-2 px-4'>
            <Link
              href="/projects"
              className="px-3 py-1 rounded-md bg-zinc-600 text-white font-medium text-sm border-0 whitespace-nowrap leading-none transition-colors duration-300 hover:bg-white hover:text-black "
            >
              All projects
            </Link>
            <Link
              href="/tags"
              className="px-3 py-1 rounded-md bg-zinc-600 text-white font-medium text-sm border-0 whitespace-nowrap leading-none transition-colors duration-300 hover:bg-white hover:text-black"
            >
              All tags
            </Link>
          </div>
        </div>
        <ContentList content={projects} type={true} />
      </section>
      <section>
        <div className="flex items-center px-4 mb-4">
          <h2 className="text-2xl">Latest posts</h2>
          <div className='flex gap-2 px-4'>
            <Link
              href="/blog"
              className="px-3 py-1 rounded-md bg-zinc-600 text-white font-medium text-sm border-0 whitespace-nowrap leading-none transition-colors duration-300 hover:bg-white hover:text-black "
            >
              All posts
            </Link>
            <Link
              href="/tags"
              className="px-3 py-1 rounded-md bg-zinc-600 text-white font-medium text-sm border-0 whitespace-nowrap leading-none transition-colors duration-300 hover:bg-white hover:text-black"
            >
              All tags
            </Link>
          </div>
        </div>
        <ContentList content={posts} type={true} />
      </section>
    </main>
  );
}
