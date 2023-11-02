// badge.stories.ts|tsx
import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Flex } from '../components/flex';
import { ShoppingBagIcon } from '../icons/shopping-bag';
import { ShoppingCartIcon } from '../icons/shopping-cart';
import { Avatar } from '../components/avatar';
import { Text } from '../components/typography';

export default {
  title: 'Components/Flex',
  component: Flex,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Flex>;

export const Simple = () => (
  <Flex>
    <ShoppingBagIcon className="w-8 h-auto" />
    <Text>Add to cart</Text>
  </Flex>
);
