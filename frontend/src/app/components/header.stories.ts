import type { Meta, StoryObj } from '@storybook/react';
import Header from './header';

const meta: Meta = {
  title: 'Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    leftIcon: {
      options: ["demo", ""],
      control: { type: 'radio' },
      defaultValue: '',
    },
    logo: {
      options: [true, false],
      control: { type: 'radio' },
      defaultValue: true,
    },
    rightIconFirst: {
      options: ["demo", ""],
      control: { type: 'radio' },
      defaultValue: '',
    },
    rightIconSecond: {
      options: ["demo", ""],
      control: { type: 'radio' },
      defaultValue: '',
    },
  },
};

export default meta;
type HeaderStory = StoryObj<typeof Header>;

export const TitleOnly : HeaderStory = {
  args : {
    logo: true,
  }
};

export const NoTitle : HeaderStory = {
  args : {
    logo: false,
    leftIcon: "demo"
  }
};

export const IconsBothSide : HeaderStory = {
  args : {
    logo: true,
    leftIcon: "demo",
    rightIconSecond: "demo",
  }
};

export const AllIcons : HeaderStory = {
  args : {
    logo: true,
    leftIcon: "demo",
    rightIconFirst: "demo",
    rightIconSecond: "demo",
  }
};
