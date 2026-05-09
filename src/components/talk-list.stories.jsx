import { expect } from 'storybook/test';
import { TalkList } from './talk-list';

const meta = {
  component: TalkList,
  tags: ['ai-generated'],
};
export default meta;

const talks = [
  {
    id: 't1',
    conference: 'Render ATL · 2024',
    title: 'Animation math without the trauma',
    link: 'https://example.com/talks/animation-math',
    slides: 'https://example.com/slides/animation-math',
  },
  {
    id: 't2',
    conference: 'JSConf · 2023',
    title: 'Generative art for front-end developers',
    link: 'https://example.com/talks/generative-art',
  },
  {
    id: 't3',
    conference: 'CSS Day · 2022',
    title: 'Drawing with CSS in three dimensions',
    slides: 'https://example.com/slides/css-3d',
  },
];

export const Default = {
  args: { talks },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /animation math/i })
    ).toBeVisible();
  },
};
