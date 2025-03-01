import type { Meta, StoryObj } from '@storybook/react';
import MissionCard from './mission-card';

const meta: Meta<typeof MissionCard> = {
  title: 'Components/MissionCard',
  component: MissionCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    showStar: { control: 'boolean' },
    onChallengeClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof MissionCard>;

export const Default: Story = {
  args: {
    title: 'ミッションタイトル',
    description: '説明文が入ります。これはミッションの詳細な説明です。ユーザーがこのミッションを完了すると特典が得られます。',
    showStar: true,
  },
};

export const WithoutStar: Story = {
  args: {
    title: 'スター無しミッション',
    description: 'このミッションにはスターアイコンが表示されません。通常のミッションとして表示されます。',
    showStar: false,
  },
};

export const LongTitle: Story = {
  args: {
    title: 'これは非常に長いミッションタイトルです。表示がどうなるか確認するためのサンプルです。',
    description: '説明文はこちらです。タイトルが長い場合でも適切に表示されるかテストします。',
    showStar: true,
  },
};

export const LongDescription: Story = {
  args: {
    title: '長い説明のミッション',
    description: 'これは非常に長い説明文です。長い説明文がどのように表示されるかをテストするためのサンプルテキストです。ミッションカードのレイアウトが崩れないことを確認します。テキストが長くなっても適切に折り返されて表示されるべきです。このようなケースでもUIが美しく保たれることが重要です。',
    showStar: true,
  },
};