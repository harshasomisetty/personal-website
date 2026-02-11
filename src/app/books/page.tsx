import { BookCard } from '@/components/books/BookCard';
import { PageLayout } from '@/components/PageLayout';
import { allBooks } from 'contentlayer/generated';

export default function BooksPage() {
  return (
    <PageLayout
      title="Books"
      description="A collection of books I've read and my thoughts on them."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {allBooks
          .sort((a, b) => {
            if (a.dateRead && b.dateRead) {
              return (
                new Date(b.dateRead).getTime() - new Date(a.dateRead).getTime()
              );
            }
            return 0;
          })
          .map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
      </div>
    </PageLayout>
  );
}
