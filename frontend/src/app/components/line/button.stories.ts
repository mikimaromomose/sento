import type { Meta, StoryObj } from '@storybook/react';
import LineButton from './button';

const meta: Meta<typeof LineButton> = {
  title: 'Components/Line/Button',
  component: LineButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onLogin: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof LineButton>;

export const Default: Story = {
  args: {},
};

export const WithCustomHandler: Story = {
  args: {
    onLogin: () => {
      console.log('Custom login handler called');
      alert('LINE ログインボタンがクリックされました');
    },
  },
};