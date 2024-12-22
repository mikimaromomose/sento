import type { Meta, StoryObj } from '@storybook/react';
import Loading from './loading';


const meta: Meta = {
  title: 'Loading',
  component: Loading,
  tags: ['autodocs'],
  argTypes: {
    loading: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    width: {
      control: { type: 'number' },
      defaultValue: 80,
    },
    height: {
      control: { type: 'number' },
      defaultValue: 80,
    },
    paddingTop: {
      control: { type: 'number' },
      defaultValue: 0,
    },
    ahiruNum: {
      control: { type: 'number' },
      defaultValue: 3,
    }
  },
};

export default meta;
type LoadingStory = StoryObj<typeof Loading>;

export const Default : LoadingStory = {
  args : {
    loading: true,
  }
};

export const Lonely : LoadingStory = {
  args : {
    loading: true,
    ahiruNum: 1,
  }
};

export const With50PxHeightHeader : LoadingStory = {
  args : {
    loading: true,
    paddingTop: 50,
  }
};

export const MoreSmall : LoadingStory = {
  args : {
    loading: true,
    width: 50,
    height: 50,
  }
};

export const NotLoading : LoadingStory = {
  args : {
    loading: false,
  }
}
