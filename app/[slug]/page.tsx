

import { getPostBySlug, getPostSlugs } from '@/lib/md';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import slugify from 'slugify';
import ReactMarkdown from 'react-markdown';
import CommentsContainer from "@/components/CommentsContainer"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const siteUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://ramonmorcillo.com';
  const imageUrl = `${siteUrl}${post?.image}`;
  const postUrl = `${siteUrl}/${slug}`;
  console.log(imageUrl)
  return {
    title: post?.meta.title,
    description: post?.meta.description,
    openGraph: {
      url: postUrl, // og:url
      type: 'article', // og:type
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post?.meta.title || 'Blog post image',
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  // Dummy previous/next logic: replace with your own logic to fetch previous/next posts
  const allPosts = await getPostSlugs();
  const idx = allPosts.findIndex((s) => s === slug);
  const previousSlug = idx > 0 ? allPosts[idx - 1] : null;
  const nextSlug = idx < allPosts.length - 1 ? allPosts[idx + 1] : null;
  // You may want to fetch titles for previous/next posts
  const previousPost = previousSlug ? await getPostBySlug(previousSlug) : null;
  const nextPost = nextSlug ? await getPostBySlug(nextSlug) : null;

  return (
    <div className="max-w-4xl w-full mx-auto mt-24 mb-20 px-4 relative z-30">
      <article>
        <header>
          <h1 className="text-2xl font-medium mb-2">{post.meta.title}</h1>
          {post.meta.description && <p className="text-lg text-white/90 mb-2">{post.meta.description}</p>}
          <div className="flex flex-wrap gap-2 py-4">
            {post.meta.tags?.sort().map((tag: string) => (
              <Link
                key={tag}
                href={`/tags/${slugify(tag, { lower: true, strict: true })}`}
                className="inline-block px-3 py-1 rounded-full bg-white/20 text-white/90  font-semibold text-xs hover:bg-white hover:text-black transition-colors "
              >
                {tag}
              </Link>
            ))}
          </div>
          <div className="text-white/90 text-sm mb-4">{post.meta.date}</div>
          {post.image && (
            <div className="w-full h-auto mb-6">
              <img src={post.image} alt={post.meta.title} width={800} height={400} className="rounded-lg object-cover w-full h-auto" />
            </div>
          )}
        </header>
        <div className="prose-invert prose-lg max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

      </article>
      <CommentsContainer commentsUrl={post.meta.commentsUrl ?? ''} />

      {/* Other posts section */}
      <h2 className="mt-12 mb-4 text-2xl font-thin">Other posts</h2>
      <ul className="flex gap-2 list-none p-0 mb-8 w-full justify-between">
        {previousPost && (
          <li className="w-1/2 text-left p-4">
            <Link href={`/${previousPost.slug}`} rel="prev" className="underline underline-offset-2 decoration-dashed decoration-white decoration-[1px] hover:decoration-solid transition-colors font-semibold text-white">
              ← {previousPost.meta.title}
            </Link>
          </li>
        )}
        {nextPost && (
          <li className="w-1/2 text-right p-4">
            <Link href={`/${nextPost.slug}`} rel="next" className="underline underline-offset-2 decoration-dashed decoration-white decoration-[1px] hover:decoration-solid transition-colors font-semibold text-white">
              {nextPost.meta.title} →
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
