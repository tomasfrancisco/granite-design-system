import type { Meta, StoryObj } from '@storybook/react';

import { MenuItem, MenuLink } from './';

const meta = {
  title: 'Menu/MenuItem',
  component: MenuItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [(Story) => <ul>{Story()}</ul>],
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <MenuLink href="#">Home</MenuLink>,
  },
};
