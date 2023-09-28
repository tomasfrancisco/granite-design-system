import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from '@/index';

const meta = {
  title: 'TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Message',
    required: true,
    rows: 5,
  },
};
