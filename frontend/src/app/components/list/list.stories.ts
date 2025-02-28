import type { Meta, StoryObj } from '@storybook/react';
import List from './list';
import { ListItem } from './list';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
    loading: { control: 'boolean' },
    showContent: { control: 'boolean' },
    onItemClick: { action: 'clicked' },
    buttonText: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

const sampleItems: ListItem[] = [
  {
    id: 1,
    name: '小杉湯',
    nearest_station: '高円寺',
    walking_time: 5,
    address: '東京都杉並区にある創業1933年の老舗銭湯です。',
    images: ['/images/logo.png', '/images/logo.png'],
    description: '東京都杉並区にある創業1933年の老舗銭湯です。',
  },
  {
    id: 2,
    name: '天然温泉 久松湯',
    nearest_station: '江東区',
    walking_time: 7,
    address: '東京都江東区にある天然温泉の銭湯です。',
    images: ['/images/logo.png'],
    description: '東京都江東区にある天然温泉の銭湯です。',
  },
  {
    id: 3,
    name: 'サウナ&スパ カプセル',
    nearest_station: '新宿',
    walking_time: 3,
    address: '東京都新宿区',
    images: ['/images/logo.png', '/images/logo.png', '/images/logo.png'],
    description: '最新設備を備えた24時間営業のサウナ施設です。',
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
    loading: false,
    showContent: true,
    onItemClick: (id) => console.log(`Item ${id} clicked`),
    buttonText: '詳細',
  },
};

export const SingleItem: Story = {
  args: {
    items: [sampleItems[0]],
    loading: false,
    showContent: true,
    onItemClick: (id) => console.log(`Item ${id} clicked`),
  },
};

export const Loading: Story = {
  args: {
    items: [],
    loading: true,
    showContent: true,
  },
};

export const Empty: Story = {
  args: {
    items: [],
    loading: false,
    showContent: true,
  },
};