import type { Meta, StoryObj } from '@storybook/react';
import MissionList from './mission-list';

const meta: Meta<typeof MissionList> = {
  title: 'Components/MissionList',
  component: MissionList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MissionList>;

export const Default: Story = {};

// MissionListコンポーネントは内部でサンプルデータを使用しているため、
// 追加のストーリーは必要ありません