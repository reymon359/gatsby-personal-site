// app/projects/page.tsx
import { ContentList } from '@/components/ContentList';
import { getAllProjects } from '@/lib/md';
import Link from 'next/link';

export default function ProjectsPage() {
  const projects = getAllProjects().map((project) => ({
    title: project.meta.title,
    slug: project.slug,
    date: project.meta.date,
    type: project.meta.type || 'project',
    ...(project.meta.description ? { description: project.meta.description } : {}),
    ...(project.meta.tags ? { tags: project.meta.tags } : {}),
    url: project.meta.url || '',
    image: project.image || '',
  }));

  return (
    <main className="max-w-4xl mx-auto py-10 px-4 mt-24 relative z-30">
      <header className="mb-12 px-4 flex flex-col gap-2">
        <h1 className="text-3xl">Projects</h1>
        <p className="text-gray-400 font-light text-lg">All my projects</p>
      </header>
      <section>
        <div className="flex items-center px-4 mb-4">
          <h2 className="text-2xl">All projects</h2>
          <div className='flex gap-2 px-4'>
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
    </main>
  );
}
