import type { Meta, StoryObj } from '@storybook/react';
import MissionCard from './mission-card';
import { userEvent, within } from '@storybook/test';

const meta: Meta<typeof MissionCard> = {
  title: 'Components/MissionList/MissionCard',
  component: MissionCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    showStar: {
      control: 'boolean',
    },
    isCompleted: {
      control: 'boolean',
    },
    onChallengeClick: {
      action: 'challengeClicked',
    },
    onStarClick: {
      action: 'starClicked',
    },
  },
};
export default meta;

type Story = StoryObj<typeof MissionCard>;

export const Default: Story = {
  args: {
    title: '温泉の基本マナーを学ぶ',
    description: '入浴前のシャワーやタオルの取り扱いなど、基本的な温泉マナーを習得しましょう。',
    showStar: false,
    isCompleted: false,
  },
};

export const WithStar: Story = {
  args: {
    ...Default.args,
    showStar: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const star = await canvas.getByRole('button', { hidden: true });
    await userEvent.click(star);
  },
};

export const CompletedMission: Story = {
  args: {
    ...Default.args,
    isCompleted: true,
    showStar: true,
  },
};

export const WithoutChallengeButton: Story = {
  args: {
    ...Default.args,
    isCompleted: true,
    onChallengeClick: undefined,
  },
};