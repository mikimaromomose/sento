import type { Meta, StoryObj } from '@storybook/react';
import Menu from './menu';

const defaultItems = [
  {
    label: 'セントウを探す',
    isActive: true,
    onClick: () => alert('clicked'),
  },
  {
    label: 'マイミッション',
    onClick: () => alert('clicked'),
  },
  {
    label: 'ログアウト',
    isSmall: true,
    onClick: () => alert('clicked'),
  },
];

const meta: Meta = {
  title: 'Menu',
  component: Menu,
  tags: ['autodocs'],
  argTypes: {
    logo: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    items: {
      control: { type: 'object' },
      defaultValue: defaultItems,
    },
  },
};

export default meta;
type MenuStory = StoryObj<typeof Menu>;

export const Default : MenuStory = {
  args : {
    items: defaultItems,
  }
};

export const NoLogo : MenuStory = {
  args : {
    logo: false,
    items: defaultItems,
  }
};

export const AnotherPageActive : MenuStory = {
  args : {
    logo: false,
    items: [
      {
        label: 'セントウを探す',
        onClick: () => alert('clicked'),
      },
      {
        label: 'マイミッション',
        isActive: true,
        onClick: () => alert('clicked'),
      },
      {
        label: 'ログアウト',
        isSmall: true,
        onClick: () => alert('clicked'),
      },
    ],
  }
};

