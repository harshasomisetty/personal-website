import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Book } from '@/types/books';
import Link from 'next/link';

interface BookCardProps {
  book: Book;
  rank: number;
}

export function BookCard({ book, rank }: BookCardProps) {
  return (
    <Link href={`/books/${book.slug}`}>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-muted-foreground">
              #{rank}
            </span>
            <h3 className="text-xl font-semibold">{book.title}</h3>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{book.author}</p>
          <p className="mt-2 text-sm">{book.summary}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
