import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      options: ["demo", ""],
      control: { type: 'radio' },
      defaultValue: '',
    },
    theme: {
      options: ["primary", "secondary", "light"],
      control: { type: 'radio' },
      defaultValue: 'primary',
    },
    size: {
      options: ["medium", "slim", ""],
      control: { type: 'radio' },
      defaultValue: "medium",
    },
    text: {
      control: { type: 'text' },
      defaultValue: 'ボタン',
    },
    width: {
      control: { type: 'text' },
      defaultValue: 'auto',
    }
  },
};

export default meta;
type ButtonStory = StoryObj<typeof Button>;

export const Primaty : ButtonStory = {
  args : {
    text: 'ボタン',
  }
};

export const PrimarySlim : ButtonStory = {
  args : {
    text: 'ボタン',
    size: 'slim'
  }
};

export const Secondary : ButtonStory = {
  args : {
    text: 'ボタン',
    theme: 'secondary',
  }
};

export const SecondarySlim : ButtonStory = {
  args : {
    text: 'ボタン',
    theme: 'secondary',
    size: 'slim'
  }
};

export const Light : ButtonStory = {
  args : {
    text: 'ボタン',
    theme: 'secondary',
  }
}

export const LightSlim: ButtonStory = {
  args : {
    text: 'ボタン',
    theme: 'secondary',
    size: 'slim',
  }
}

export const WithIcon: ButtonStory = {
  args : {
    text: 'ボタン',
    icon: 'demo'
  }
}

export const WithIconSlim: ButtonStory = {
  args : {
    text: 'ボタン',
    size: 'slim',
    icon: 'demo'
  }
}

export const Disabled: ButtonStory = {
  args : {
    text: 'ボタン',
    theme: 'disabled'
  }
}

export const DisabledSlim: ButtonStory = {
  args : {
    text: 'ボタン',
    theme: 'disabled',
    size: 'slim'
  }
}

export const WithIconDisabled: ButtonStory = {
  args : {
    text: 'ボタン',
    theme: 'disabled',
    icon: 'demo'
  }
}

export const WithIconDisabledSlim: ButtonStory = {
  args : {
    text: 'ボタン',
    theme: 'disabled',
    icon: 'demo',
    size: 'slim'
  }
}

export const Width: ButtonStory = {
  args : {
    text: 'ボタン',
    width: "350px"
  }
}

export const WidthSlim: ButtonStory = {
  args : {
    text: 'ボタン',
    width: "350px",
    size: "slim",
  }
}
