import Link from 'next/link';
import { getAllPosts } from '@/lib/md';
import Stars from '@/components/Stars';

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <div>
      <Stars
        normalVelocity={0.0001}
        containerOpacity={0.3}
        addEventListeners={false}
      />
      <section className="max-w-2xl mx-auto py-10 px-4 relative z-30">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug} className="border-b pb-4">
              <Link href={`/blog/${post.slug}`}
                className="text-xl font-semibold text-blue-600 hover:underline">
                {post.meta.title}
              </Link>
              <div className="text-gray-500 text-sm mt-1">{post.meta.date}</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
