import { Stack } from './stack';

const meta = {
  component: Stack,
  tags: ['ai-generated'],
};
export default meta;

export const FeaturedWriting = {
  render: (args) => (
    <Stack {...args}>
      <Stack.Title to="/writing">Writing</Stack.Title>
      <Stack.Item href="https://varun.ca/metaballs">
        Drawing 2D metaballs with WebGL
      </Stack.Item>
      <Stack.Item href="https://varun.ca/noise">
        Generative art with noise
      </Stack.Item>
      <Stack.Item href="https://varun.ca/ray-march-sdf">
        Ray marching signed distance fields
      </Stack.Item>
      <Stack.MoreLink to="/writing">All writing</Stack.MoreLink>
    </Stack>
  ),
};
