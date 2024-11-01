import type { Meta, StoryObj } from '@storybook/react';
import MenuItem from './menu-item';

const meta: Meta = {
  title: 'MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: { type: 'text' },
      defaultValue: 'メニューアイテム',
    },
    isActive: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    isSmall: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};

export default meta;
type MenuItemStory = StoryObj<typeof MenuItem>;

export const Default : MenuItemStory = {
  args : {
    text: 'メニューアイテム',
  }
};

export const Active : MenuItemStory = {
  args : {
    text: 'メニューアイテム',
    isActive: true,
  }
};

export const Small : MenuItemStory = {
  args : {
    text: 'メニューアイテム',
    isSmall: true,
  }
};

export const SmallActive : MenuItemStory = {
  args : {
    text: 'メニューアイテム',
    isActive: true,
    isSmall: true,
  }
};
