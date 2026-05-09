import { expect } from 'storybook/test';
import { ProfileLinks } from './profile-links';

const meta = {
  component: ProfileLinks,
  tags: ['ai-generated'],
};
export default meta;

export const Default = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('link', { name: /github/i })
    ).toHaveAttribute('rel', 'me');
  },
};
