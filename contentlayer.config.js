import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the blog',
      required: true,
    },
    date: {
      type: 'string',
      description: 'The date of the blog',
      required: true,
    },
    description: {
      type: 'string',
      description: 'Post description',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (blog) =>
        `/blog/${blog._raw.flattenedPath.replace('blog/', '')}`,
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace('blog/', ''),
    },
  },
}));

export const Book = defineDocumentType(() => ({
  name: 'Book',
  filePathPattern: `books/**/*.{md,mdx}`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the book',
      required: true,
    },
    author: {
      type: 'string',
      description: 'The author of the book',
      required: true,
    },
    summary: {
      type: 'string',
      description: 'A brief summary of the book',
      required: false,
    },
    rating: {
      type: 'number',
      description: 'Rating out of 5',
      required: true,
    },
    dateRead: {
      type: 'string',
      description: 'The date the book was read',
      required: false,
    },
    coverImage: {
      type: 'string',
      description: 'The cover image of the book',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (book) =>
        `/books/${book._raw.flattenedPath.replace('books/', '')}`,
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace('books/', ''),
    },
  },
}));

export const About = defineDocumentType(() => ({
  name: 'About',
  filePathPattern: `about.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the about page',
      required: true,
    },
    date: {
      type: 'string',
      description: 'Last updated date',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: () => '/about',
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog, Book, About],
});
