import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from './tag';

const meta = {
  title: 'Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    level: 'success',
    children: 'Success',
  },
};

export const Danger: Story = {
  args: {
    level: 'danger',
    children: 'Danger',
  },
};

export const Warning: Story = {
  args: {
    level: 'warning',
    children: 'Warning',
  },
};

export const Info: Story = {
  args: {
    level: 'info',
    children: 'Info',
  },
};
