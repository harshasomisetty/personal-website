import { BookCard } from '@/components/books/BookCard';
import { getFavoriteBooks } from '@/lib/books';

export default function BooksPage() {
  const books = getFavoriteBooks();

  console.log('Rendering books page with:', books);

  return (
    <main className="container py-6 space-y-8">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        My Book Rankings
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book, index) => (
          <BookCard key={book.id} rank={index + 1} book={book} />
        ))}
      </div>
    </main>
  );
}
