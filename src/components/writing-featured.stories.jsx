import { WritingFeatured } from './writing-featured';

const meta = {
  component: WritingFeatured,
  tags: ['ai-generated'],
};
export default meta;

const posts = [
  {
    id: '1',
    fields: { slug: '/metaballs' },
    frontmatter: {
      title: 'Drawing 2D metaballs with WebGL',
      date: 'Apr 18, 2021',
      timestamp: '2021-04-18',
    },
  },
  {
    id: '2',
    fields: { slug: '/noise' },
    frontmatter: {
      title: 'Generative art with simplex noise',
      date: 'Feb 4, 2021',
      timestamp: '2021-02-04',
    },
  },
  {
    id: '3',
    fields: { slug: '/ray-march-sdf' },
    frontmatter: {
      title: 'Ray marching signed distance fields',
      date: 'Sep 12, 2020',
      timestamp: '2020-09-12',
    },
  },
];

export const Default = { args: { posts } };
