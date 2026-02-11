import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Book } from 'contentlayer/generated';
import Link from 'next/link';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/books/${book.slug}`}>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-center gap-4">
            <h3 className="text-xl font-semibold">{book.title}</h3>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{book.author}</p>
          <p className="mt-2 text-sm">{book.summary}</p>
          <div className="mt-4 flex gap-2 text-sm text-muted-foreground">
            {book.dateRead && <span>Read on {book.dateRead}</span>}
            <span>Rating: {book.rating}/5</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
