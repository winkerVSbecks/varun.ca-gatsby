import { Blockquote, Cite } from './blockquote';
import { Text } from './typography';

const meta = {
  component: Blockquote,
  tags: ['ai-generated'],
};
export default meta;

export const Quote = {
  render: (args) => (
    <Blockquote {...args}>
      <Text>
        Premature optimization is the root of all evil (or at least most of
        it) in programming.
      </Text>
      <Cite>— Donald Knuth</Cite>
    </Blockquote>
  ),
};
