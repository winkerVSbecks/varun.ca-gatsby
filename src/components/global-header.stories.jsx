import { expect } from 'storybook/test';
import { GlobalHeader } from './global-header';

const meta = {
  component: GlobalHeader,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
};
export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('link', { name: /varun vachhar/i })
    ).toBeVisible();
    await expect(
      canvas.getByRole('button', { name: /cycle colour mode/i })
    ).toBeVisible();
  },
};
