import { allBlogs } from 'contentlayer/generated';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts',
};

export default function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
      {allBlogs
        .sort((a, b) => {
          if (a.date > b.date) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex flex-col space-y-2 mb-4 cursor-pointer hover:underline"
          >
            <div className="w-full flex flex-col">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-600">
                {new Date(post.date).toLocaleDateString()}
              </p>
            </div>
            <p className="text-base">{post.description}</p>
          </Link>
        ))}
    </section>
  );
}
