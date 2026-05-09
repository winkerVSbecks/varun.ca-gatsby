import { expect } from 'storybook/test';
import { Newsletter } from './newsletter';

const meta = {
  component: Newsletter,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
};
export default meta;

export const Default = {
  play: async ({ canvas, userEvent }) => {
    const email = canvas.getByLabelText(/enter your email address/i);
    await userEvent.type(email, 'reader@example.com');
    await expect(email).toHaveValue('reader@example.com');
  },
};
