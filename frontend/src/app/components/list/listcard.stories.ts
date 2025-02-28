import type { Meta, StoryObj } from '@storybook/react';
import ListCard from './listcard';

const meta: Meta<typeof ListCard> = {
  title: 'Components/ListCard',
  component: ListCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    images: { control: 'object' },
    imageAlt: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    subDescription: { control: 'text' },
    onDetailClick: { action: 'clicked' },
    buttonText: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ListCard>;

export const Default: Story = {
  args: {
    images: ['/images/logo.png'],
    imageAlt: 'サンプル画像',
    title: '銭湯名',
    description: '銭湯の説明文がここに入ります。場所や特徴などの情報を含みます。',
    subDescription: '東京都杉並区高円寺北3-32-17',
    buttonText: '詳細',
  },
};

export const MultipleImages: Story = {
  args: {
    images: ['/images/logo.png', '/images/logo.png', '/images/logo.png'],
    imageAlt: 'サンプル画像',
    title: '複数画像の銭湯',
    description: '複数の画像を持つ銭湯のサンプルです。',
    subDescription: '東京都中野区中野1-2-3',
    buttonText: '詳細を見る',
  },
};

export const LongDescription: Story = {
  args: {
    images: ['/images/logo.png'],
    imageAlt: 'サンプル画像',
    title: '長い名前の銭湯',
    description: 'これは長い説明文のサンプルです。銭湯の特徴や歴史、提供しているサービスなどの詳細情報が含まれています。訪問者にとって役立つ情報をここに記載します。',
    subDescription: '東京都新宿区新宿4-5-6',
  },
};