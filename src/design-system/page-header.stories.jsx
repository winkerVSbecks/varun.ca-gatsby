import { expect } from 'storybook/test';
import { PageHeader } from './page-header';
import { Text } from './typography';

const meta = {
  component: PageHeader,
  tags: ['ai-generated'],
};
export default meta;

export const TitleOnly = {
  args: { title: 'Writing' },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { level: 1, name: /writing/i })
    ).toBeVisible();
  },
};

export const WithDescription = {
  args: {
    title: 'Sketches',
    children: (
      <Text>An ongoing collection of generative art experiments.</Text>
    ),
  },
};
