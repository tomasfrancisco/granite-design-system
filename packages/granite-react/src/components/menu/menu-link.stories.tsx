import type { Meta, StoryObj } from '@storybook/react';

import { MenuLink } from '@/index';

const meta = {
  title: 'Menu/MenuLink',
  component: MenuLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MenuLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Home',
    href: '#',
  },
};
