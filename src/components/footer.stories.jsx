import { expect } from 'storybook/test';
import { Footer } from './footer';

const meta = {
  component: Footer,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
};
export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('link', { name: /writing/i })
    ).toHaveAttribute('href', '/writing');
    await expect(
      canvas.getByRole('link', { name: /github/i })
    ).toHaveAttribute('href', 'http://github.com/winkerVSbecks');
  },
};
