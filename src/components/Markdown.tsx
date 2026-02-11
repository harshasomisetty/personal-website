import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';

interface MarkdownProps {
  content: string;
  className?: string;
}

export function Markdown({ content, className }: MarkdownProps) {
  console.log('Rendering Markdown component');
  return (
    <article
      className={cn(
        'prose prose-quoteless prose-neutral dark:prose-invert',
        // Headings
        'prose-h1:text-6xl prose-h1:font-bold prose-h1:font-serif prose-h1:mb-8',
        'prose-h2:text-3xl prose-h2:font-bold prose-h2:font-serif',
        'prose-h3:text-2xl prose-h3:font-bold prose-h3:font-serif',
        // Paragraphs
        'prose-p:text-base prose-p:leading-7 prose-p:mb-6',
        'prose-p:text-neutral-800 prose-p:dark:text-neutral-200',
        // Allow custom overrides
        className,
      )}
    >
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
