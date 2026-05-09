import { Box, Flex, Card, Divider, SrOnly } from './primitives';

const meta = {
  component: Box,
  tags: ['ai-generated'],
};
export default meta;

export const PaddedBox = {
  args: {
    p: 4,
    bg: 'neutral.5',
    color: 'neutral.0',
    children: 'A Box with padding 4 and neutral.5 background.',
  },
};

export const FlexRow = {
  render: (args) => (
    <Flex {...args}>
      <Box p={3} bg="brand.bright" mr={2}>
        One
      </Box>
      <Box p={3} bg="brand.faded" mr={2}>
        Two
      </Box>
      <Box p={3} bg="neutral.5">
        Three
      </Box>
    </Flex>
  ),
  args: { alignItems: 'center' },
};

export const CardSurface = {
  render: (args) => (
    <Card {...args}>
      <Box p={4}>
        <strong>Card</strong> with overflow hidden and rounded corners.
      </Box>
    </Card>
  ),
  args: { bg: 'neutral.5', maxWidth: 360 },
};

export const HorizontalRule = {
  render: () => (
    <Box>
      <Box pb={3}>Above</Box>
      <Divider />
      <Box pt={3}>Below</Box>
    </Box>
  ),
};

export const VisuallyHidden = {
  render: () => (
    <Box>
      <SrOnly>This text is only available to screen readers</SrOnly>
      <Box>Sighted users see this line.</Box>
    </Box>
  ),
};
