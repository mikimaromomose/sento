import type { Meta, StoryObj } from '@storybook/react';
import MissionFooter from './mission-footer';
import { userEvent, within } from '@storybook/test';

const meta: Meta<typeof MissionFooter> = {
  title: 'Components/MissionList/MissionFooter',
  component: MissionFooter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tsukaritai: {
      control: { type: 'number', min: 0 },
    },
    officialSiteUrl: {
      control: 'text',
    },
    handleClickTsukaritai: {
      action: 'clicked',
    },
  },
};
export default meta;

type Story = StoryObj<typeof MissionFooter>;

export const Default: Story = {
  args: {
    tsukaritai: 5,
    officialSiteUrl: 'https://example.com',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = await canvas.findAllByRole('button');
    await userEvent.click(buttons[0]);
  },
};

export const WithoutOfficialSite: Story = {
  args: {
    tsukaritai: 3,
    officialSiteUrl: undefined,
  },
};

export const ZeroTsukaritai: Story = {
  args: {
    tsukaritai: 0,
    officialSiteUrl: 'https://example.co.jp',
  },
};