import { CallOut } from './call-out';

const meta = {
  component: CallOut,
  tags: ['ai-generated'],
};
export default meta;

export const Default = {
  args: {
    children:
      'Heads up! This article is part of a series — read the others first for the full context.',
  },
};

export const Multiline = {
  args: {
    children: (
      <>
        Long-form callouts wrap to multiple lines and keep their soft
        background, padding, and rounded corners.
        <br />
        <br />
        Use them sparingly to highlight only the most important asides.
      </>
    ),
  },
};
