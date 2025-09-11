import { allBlogs } from 'contentlayer/generated';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-8">Blog</h1>
      {allBlogs
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((post) => (
          <Link
            key={post.slug}
            className="group block mb-4"
            href={`/blog/${post.slug}`}
          >
            <article className="w-full flex flex-col space-y-1 rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 transition-colors hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-900">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.title}
                </p>
                <time
                  className="text-sm text-neutral-600 dark:text-neutral-400 whitespace-nowrap"
                  dateTime={post.date}
                >
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                  })}
                </time>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">
                {post.summary}
              </p>
              <span className="pt-1 text-sm text-neutral-500 dark:text-neutral-400 inline-flex items-center">
                Read more
                <span className="ml-1 transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </article>
          </Link>
        ))}
    </section>
  );
}
