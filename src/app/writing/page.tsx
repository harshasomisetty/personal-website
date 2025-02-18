import { PageLayout } from '@/components/PageLayout';
import { allBlogs } from 'contentlayer/generated';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts',
};

export default function BlogPage() {
  return (
    <PageLayout title="Blog">
      <div className="space-y-4">
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
              className="flex flex-col space-y-2 cursor-pointer hover:underline"
            >
              <div className="w-full flex flex-col">
                <h2 className="text-xl font-semibold tracking-tight">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
              <p className="text-base text-muted-foreground">{post.summary}</p>
            </Link>
          ))}
      </div>
    </PageLayout>
  );
}
