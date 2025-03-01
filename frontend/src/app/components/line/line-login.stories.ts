import type { Meta, StoryObj } from '@storybook/react';
import LineLogin from './line-login';

const meta: Meta<typeof LineLogin> = {
  title: 'Components/Line/LineLogin',
  component: LineLogin,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof LineLogin>;

export const Default: Story = {
  args: {
    onClick: () => console.log('LINE login clicked'),
  },
};

export const WithCustomHandler: Story = {
  args: {
    onClick: () => {
      console.log('Custom login handler called');
      alert('LINE ログインがクリックされました');
    },
  },
};