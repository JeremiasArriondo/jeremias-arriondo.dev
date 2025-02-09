import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/blog/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/')
  },
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
    date: {
      type: 'date',
      required: true
    },
    published: {
      type: 'boolean',
      default: true
    },
    image: {
      type: 'string',
      required: true
    },
    author: {
      type: 'string',
      required: true
    },
    categories: {
      type: 'list',
      of: {
        type: 'enum',
        options: [
          'Next.js',
          'React',
          'Mulesoft',
          'Programming',
          'Web',
          'NestJS',
          'Sin categoría'
        ],
        default: 'Sin categoría'
      },
      required: true
    }
  },
  computedFields
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    // remarkPlugins: [remarkGfm],
    rehypePlugins: [
      remarkGfm,
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted'];
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
            'data-mdx-heading': '',
            ariaLabel: 'Link to section'
          }
        }
      ]
    ]
  }
});
