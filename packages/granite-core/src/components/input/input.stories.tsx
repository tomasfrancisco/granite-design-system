import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@/index';

const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email Address',
    required: true,
  },
};
