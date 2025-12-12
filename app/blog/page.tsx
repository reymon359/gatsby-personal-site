import { ContentList } from '@/components/ContentList';
import { getAllPosts } from '@/lib/md';
import Link from 'next/link';
import Stars from '@/components/Stars';

export default function BlogPage() {
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
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div>
      <Stars
        normalVelocity={0.0001}
        containerOpacity={0.3}
        addEventListeners={false}
      />
      <main className="max-w-4xl mx-auto py-10 px-4 mt-24 relative z-30">
        <header className="mb-12 px-4 flex flex-col gap-2">
          <h1 className="text-3xl">Blog</h1>
          <p className="text-gray-400 font-light text-lg">All my posts</p>
        </header>
        <section>
          <div className="flex items-center px-4 mb-4">
            <h2 className="text-2xl">All posts</h2>
            <div className='flex gap-2 px-4'>
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
    </div>
  );
}
