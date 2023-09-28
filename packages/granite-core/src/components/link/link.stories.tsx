import type { Meta, StoryObj } from '@storybook/react';

import { Link } from '@/index';

const meta = {
  title: 'Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Link',
    href: '#',
  },
};
