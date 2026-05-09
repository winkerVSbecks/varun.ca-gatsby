import { Icon } from './icon';
import { Flex } from './primitives';

const meta = {
  component: Icon,
  tags: ['ai-generated'],
};
export default meta;

export const Speaker = { args: { type: 'speaker', fontSize: 5 } };
export const Github = { args: { type: 'github', fontSize: 5 } };
export const ArrowRight = { args: { type: 'arrow-right', fontSize: 5 } };
export const ThemeMode = { args: { type: 'themeMode', fontSize: 5 } };

export const AllIcons = {
  render: () => (
    <Flex alignItems="center">
      <Icon type="speaker" fontSize={5} mr={3} />
      <Icon type="github" fontSize={5} mr={3} />
      <Icon type="slides" fontSize={5} mr={3} />
      <Icon type="video" fontSize={5} mr={3} />
      <Icon type="link" fontSize={5} mr={3} />
      <Icon type="externalLink" fontSize={5} mr={3} />
      <Icon type="arrow-left" fontSize={5} mr={3} />
      <Icon type="arrow-right" fontSize={5} mr={3} />
      <Icon type="chevron-left" fontSize={5} mr={3} />
      <Icon type="chevron-right" fontSize={5} mr={3} />
      <Icon type="themeMode" fontSize={5} />
    </Flex>
  ),
};
