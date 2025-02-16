import { Book } from '@/types/books';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const booksDirectory = path.join(process.cwd(), 'content/books');

export function getFavoriteBooks(): Book[] {
  const fileNames = fs.readdirSync(booksDirectory);
  const books = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(booksDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        id: fileName.replace(/\.md$/, ''),
        slug: fileName.replace(/\.md$/, ''),
        title: data.title,
        author: data.author,
        summary: data.summary,
        rating: data.rating,
        dateRead: data.dateRead,
        coverImage: data.coverImage,
      };
    })
    .sort((a, b) => b.rating - a.rating);

  console.log('Loaded books:', books);
  return books;
}

export function getBookBySlug(slug: string): { book: Book; content: string } {
  const fullPath = path.join(booksDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    book: {
      id: slug,
      slug,
      title: data.title,
      author: data.author,
      summary: data.summary,
      rating: data.rating,
      dateRead: data.dateRead,
      coverImage: data.coverImage,
    },
    content,
  };
}
