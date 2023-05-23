import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `**/*.mdx`,
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
      resolve: (blog) => `/blog/${blog._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Blog],
});
