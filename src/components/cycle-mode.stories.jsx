import { expect } from 'storybook/test';
import { CycleMode } from './cycle-mode';

const meta = {
  component: CycleMode,
  tags: ['ai-generated'],
};
export default meta;

export const Default = {
  play: async ({ canvas, userEvent }) => {
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('title', 'cycle colour mode');
    await userEvent.click(button);
  },
};
