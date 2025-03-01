import type { Meta, StoryObj } from '@storybook/react';
import StarIcon from './star-icon';

const meta: Meta<typeof StarIcon> = {
  title: 'Components/Icon/StarIcon',
  component: StarIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 12, max: 48, step: 4 } },
    color: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof StarIcon>;

export const Default: Story = {
  args: {
    size: 24,
    color: 'var(--var-color-accent)',
  },
};

export const Large: Story = {
  args: {
    size: 48,
    color: '#D9BC66',
  },
};

export const Small: Story = {
  args: {
    size: 16,
    color: '#D9BC66',
  },
};

export const CustomColor: Story = {
  args: {
    size: 24,
    color: '#FF5733',
  },
};