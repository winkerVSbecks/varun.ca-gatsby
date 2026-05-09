import { expect } from 'storybook/test';
import { Date } from './date';

const meta = {
  component: Date,
  tags: ['ai-generated'],
};
export default meta;

export const Default = {
  args: {
    date: 'May 8, 2026',
    timestamp: '2026-05-08',
  },
  play: async ({ canvas }) => {
    const time = canvas.getByText(/may 8, 2026/i);
    await expect(time).toHaveAttribute('datetime', '2026-05-08');
  },
};

export const ISOOnly = {
  args: {
    date: '2024-01-15',
    timestamp: '2024-01-15T00:00:00Z',
  },
};
