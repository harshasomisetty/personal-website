import { allBlogs } from 'contentlayer/generated';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-8">Blog</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.title}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400">
                {post.summary}
              </p>
            </div>
          </Link>
        ))}
    </section>
  );
}
