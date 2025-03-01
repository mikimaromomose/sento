import type { Meta, StoryObj } from '@storybook/react';
import Headline from './headline';

const meta: Meta<typeof Headline> = {
  title: 'Components/Text/Headline',
  component: Headline,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Headline>;

export const Default: Story = {
  args: {
    text: 'ミッション一覧',
  },
};

export const LongText: Story = {
  args: {
    text: '非常に長いヘッドラインテキストの例です。これがどのように表示されるか確認します。',
  },
};

export const ShortText: Story = {
  args: {
    text: '見出し',
  },
};