import { Mdx } from '@/components/mdx';
import { allBooks } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

interface BookPageProps {
  params: {
    slug: string;
  };
}

export default function BookPage({ params }: BookPageProps) {
  const book = allBooks.find((book) => book.slug === params.slug);

  if (!book) {
    notFound();
  }

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

      <Mdx code={book.body.code} tweets={{}} />
    </main>
  );
}
