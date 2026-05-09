import { expect } from 'storybook/test';
import { Text, Description, H1, H2, H3, H4 } from './typography';

const meta = {
  component: Text,
  tags: ['ai-generated'],
};
export default meta;

export const Paragraph = {
  args: {
    children:
      'Body copy uses the Text primitive with the systemSans font and a copy-friendly line-height.',
  },
};

export const Heading1 = {
  render: (args) => <H1 {...args} />,
  args: { children: 'The largest heading' },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { level: 1, name: /largest heading/i })
    ).toBeVisible();
  },
};

export const Heading2 = {
  render: (args) => <H2 {...args} />,
  args: { children: 'Section heading' },
};

export const Heading3 = {
  render: (args) => <H3 {...args} />,
  args: { children: 'Subsection heading' },
};

export const Heading4 = {
  render: (args) => <H4 {...args} />,
  args: { children: 'Minor heading' },
};

export const DescriptionText = {
  render: (args) => <Description {...args} />,
  args: { children: 'Muted description text used under titles.' },
};
