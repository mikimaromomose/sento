import type { Meta, StoryObj } from '@storybook/react';
import MissionList from './mission-list';

const meta: Meta<typeof MissionList> = {
  title: 'Components/MissionList/MissionList',
  component: MissionList,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    list: {
      control: {
        type: 'object',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof MissionList>;

const sampleMissions = [
  {
    id: "1",
    name: '温泉の基本マナーを学ぶ',
    description: '入浴前のシャワーやタオルの取り扱いなど基本的なマナーを習得',
    showStar: true,
    isCompleted: false,
  },
  {
    id: "2",
    name: 'サウナの正しい入り方',
    description: '温度管理と水分補給の重要性について学ぶ',
    showStar: false,
    isCompleted: true,
  },
  {
    id: "3",
    name: '水風呂の効果的な使い方',
    description: '体温調節と疲労回復のための正しい入浴方法',
    showStar: true,
    isCompleted: false,
  }
];

export const Default: Story = {
  args: {
    list: sampleMissions,
    handleChallengeClick: (id: string) => console.log('Challenge:', id),
    handleStarClick: (id: string) => console.log('Star:', id)
  }
};

export const EmptyList: Story = {
  args: {
    list: [],
    handleChallengeClick: (id: string) => console.log('Challenge:', id),
    handleStarClick: (id: string) => console.log('Star:', id)
  }
};

export const MixedStatus: Story = {
  args: {
    list: [
      ...sampleMissions,
      {
        id: "4",
        name: '露天風呂の楽しみ方',
        description: '自然との調和を意識した入浴方法',
        showStar: true,
        isCompleted: true,
      }
    ],
    handleChallengeClick: (id: string) => console.log('Challenge:', id),
    handleStarClick: (id: string) => console.log('Star:', id)
  }
};