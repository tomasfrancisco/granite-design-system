import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '@/index';

const meta = {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

const children = 'Višić The quick brown fox jumps over the lazy dog';

export const Default: Story = {
  args: {
    children,
  },
};
