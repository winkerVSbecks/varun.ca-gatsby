import { expect } from 'storybook/test';
import {
  Button,
  PrimaryButton,
  TransparentButton,
  ButtonLink,
} from './buttons';

const meta = {
  component: PrimaryButton,
  tags: ['ai-generated'],
};
export default meta;

export const Primary = {
  args: { children: 'Subscribe' },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('button', { name: /subscribe/i })
    ).toBeVisible();
  },
};

export const PlainButton = {
  render: (args) => <Button {...args} />,
  args: { children: 'Click me', px: 3, py: 2 },
};

export const Transparent = {
  render: (args) => <TransparentButton {...args} />,
  args: { children: 'Skip', color: 'neutral.0' },
};

export const AsButtonLink = {
  render: (args) => <ButtonLink {...args} />,
  args: { children: 'Read more', href: '#' },
};

// Mandatory single CssCheck for the project. PrimaryButton sets
// `bg: 'neutral.1'` which resolves to `#555` in the light theme.
// If the shared preview's ThemeProvider/global CSS didn't load, this fails.
export const CssCheck = {
  args: { children: 'Submit' },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /submit/i });
    await expect(getComputedStyle(button).backgroundColor).toBe(
      'rgb(85, 85, 85)'
    );
  },
};
