export interface Book {
  id: string;
  title: string;
  author: string;
  slug: string;
  summary: string;
  rating: number;
  dateRead?: string;
  coverImage?: string;
}
