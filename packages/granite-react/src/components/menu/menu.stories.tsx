import type { Meta, StoryObj } from '@storybook/react';

import { Menu, MenuItem, MenuLink } from '@/index';

const meta = {
  title: 'Menu/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    direction: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <MenuItem>
          <MenuLink href="#">Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">Portfolio</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">About</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">Contact</MenuLink>
        </MenuItem>
      </>
    ),
  },
};
