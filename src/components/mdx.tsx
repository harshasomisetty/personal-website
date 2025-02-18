// @ts-nocheck

import { cn } from '@/lib/utils';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import Link from 'next/link';

const CustomLink = (props: any) => {
  const href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Callout(props: any) {
  return (
    <div className="px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

function ProsCard({ title, pros }: { title: string; pros: string[] }) {
  return (
    <div className="border border-emerald-200 dark:border-emerald-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 my-4 w-full">
      <span>{`You might use ${title} if...`}</span>
      <div className="mt-4">
        {pros.map((pro) => (
          <div key={pro} className="flex font-medium items-baseline mb-2">
            <div className="h-4 w-4 mr-2">
              <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </g>
              </svg>
            </div>
            <span>{pro}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConsCard({ title, cons }: { title: string; cons: string[] }) {
  return (
    <div className="border border-red-200 dark:border-red-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 my-4 w-full">
      <span>{`You might not use ${title} if...`}</span>
      <div className="mt-4">
        {cons.map((con) => (
          <div key={con} className="flex font-medium items-baseline mb-2">
            <div className="h-4 w-4 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-red-500"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </div>
            <span>{con}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  ProsCard,
  ConsCard,
};

interface MdxProps {
  code: string;
  tweets: Record<string, any>;
}

export function Mdx({ code, tweets }: MdxProps) {
  const Component = useMDXComponent(code);
  //   const StaticTweet = ({ id }) => {
  //     const tweet = tweets.find((tweet) => tweet.id === id);
  // return <Tweet {...tweet} />;
  //   };

  return (
    <article
      className={cn(
        'prose prose-quoteless prose-neutral dark:prose-invert max-w-none',
        // Headings
        'prose-headings:font-bold prose-headings:text-neutral-900 dark:prose-headings:text-neutral-100',
        'prose-h1:text-4xl prose-h1:mb-8',
        'prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4',
        'prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3',
        // Paragraphs
        'prose-p:text-neutral-800 dark:prose-p:text-neutral-200 prose-p:leading-7',
        // Lists
        'prose-ul:list-disc prose-ul:ml-6',
        'prose-ol:list-decimal prose-ol:ml-6',
        'prose-li:text-neutral-800 dark:prose-li:text-neutral-200 prose-li:mt-2',
        // Links
        'prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline',
        // Code
        'prose-code:text-blue-500 dark:prose-code:text-blue-400 prose-code:bg-blue-50 dark:prose-code:bg-blue-900/20 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none',
        // Pre
        'prose-pre:bg-neutral-100 dark:prose-pre:bg-neutral-900 prose-pre:rounded-lg prose-pre:p-4',
        // Hr
        'prose-hr:border-neutral-200 dark:prose-hr:border-neutral-800',
        // Blockquote
        'prose-blockquote:border-l-4 prose-blockquote:border-neutral-200 dark:prose-blockquote:border-neutral-800 prose-blockquote:pl-4 prose-blockquote:text-neutral-600 dark:prose-blockquote:text-neutral-400',
        // Strong
        'prose-strong:text-neutral-900 dark:prose-strong:text-neutral-100',
        // Table
        'prose-table:border-collapse prose-table:w-full',
        'prose-th:border prose-th:border-neutral-200 dark:prose-th:border-neutral-800 prose-th:p-2 prose-th:bg-neutral-100 dark:prose-th:bg-neutral-900',
        'prose-td:border prose-td:border-neutral-200 dark:prose-td:border-neutral-800 prose-td:p-2',
      )}
    >
      {/* <Component components={{ ...components, StaticTweet }} /> */}
      <Component components={components} />
    </article>
  );
}
