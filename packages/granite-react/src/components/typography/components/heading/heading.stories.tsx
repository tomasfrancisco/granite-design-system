import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from '@/index';

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

const children = 'Višić The quick brown fox jumps over the lazy dog';

export const Default: Story = {
  args: {
    as: 'h1',
    children,
  },
};
