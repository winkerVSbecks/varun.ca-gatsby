import { expect } from 'storybook/test';
import { SimpleLink } from './links';

const meta = {
  component: SimpleLink,
  tags: ['ai-generated'],
};
export default meta;

export const External = {
  args: {
    href: 'https://varun.ca',
    children: 'Visit varun.ca',
  },
  play: async ({ canvas }) => {
    const link = canvas.getByRole('link', { name: /visit varun\.ca/i });
    await expect(link).toHaveAttribute('href', 'https://varun.ca');
  },
};

export const Internal = {
  args: {
    to: '/writing',
    children: 'All writing',
  },
};
