import { Markdown } from '@/components/Markdown';
import { getBookBySlug } from '@/lib/books';

interface BookPageProps {
  params: {
    slug: string;
  };
}

export default function BookPage({ params }: BookPageProps) {
  const { book, content } = getBookBySlug(params.slug);

  console.log('Rendering book page:', book.title);

  return (
    <main className="container py-6 space-y-8">
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          {book.title}
        </h1>
        <div className="flex gap-2 text-muted-foreground">
          <span>by {book.author}</span>
          {book.dateRead && (
            <>
              <span>•</span>
              <span>Read on {book.dateRead}</span>
            </>
          )}
          <span>•</span>
          <span>Rating: {book.rating}/5</span>
        </div>
      </div>

      <Markdown content={content} />
    </main>
  );
}
