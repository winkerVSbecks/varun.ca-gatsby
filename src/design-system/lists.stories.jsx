import { FlatList, List, OrderedList, ListItem } from './lists';

const meta = {
  component: List,
  tags: ['ai-generated'],
};
export default meta;

export const Bulleted = {
  render: (args) => (
    <List {...args}>
      <ListItem>Read</ListItem>
      <ListItem>Write</ListItem>
      <ListItem>Refactor</ListItem>
    </List>
  ),
};

export const Numbered = {
  render: (args) => (
    <OrderedList {...args}>
      <ListItem>Sketch the idea</ListItem>
      <ListItem>Build the prototype</ListItem>
      <ListItem>Ship and iterate</ListItem>
    </OrderedList>
  ),
};

export const Flat = {
  render: (args) => (
    <FlatList {...args}>
      <ListItem mb={1}>Inline navigation item one</ListItem>
      <ListItem mb={1}>Inline navigation item two</ListItem>
      <ListItem mb={1}>Inline navigation item three</ListItem>
    </FlatList>
  ),
};
