import { expect } from 'storybook/test';
import { Input } from './input';

const meta = {
  component: Input,
  tags: ['ai-generated'],
};
export default meta;

export const Default = {
  args: {
    type: 'email',
    placeholder: 'you@example.com',
    'aria-label': 'email',
    p: 3,
    width: 5,
  },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByLabelText('email');
    await userEvent.type(input, 'hi@varun.ca');
    await expect(input).toHaveValue('hi@varun.ca');
  },
};

export const TextField = {
  args: {
    type: 'text',
    placeholder: 'Your name',
    'aria-label': 'name',
    p: 3,
    width: 5,
  },
};
