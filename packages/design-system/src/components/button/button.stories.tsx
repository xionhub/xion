import type { Meta, StoryObj } from '@storybook/react';
import { argTypes } from '../../utils/arg-types';
import { Button } from './button';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const selectListRounded = ['default', 'xs', 'sm', 'md', 'xl', 'full'] as const;
const selectListSize = ['full', 'half', 'none'] as const;
const selectListPress = ['default', 'press'] as const;
const selectListVariants = [
  'primary',
  'secondary',
  'tetiary',
  'ghost',
  'danger-primary',
  'danger-secondary',
  'danger-tetiary',
  'danger-ghost',
  'neutral-primary',
  'neutral-secondary',
  'neutral-tetiory',
  'neutral-ghost',
  'neutral-focus-ghost',
] as const;

const meta = {
  title: 'Xds/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: argTypes({ control: 'select', options: selectListVariants }),
    size: argTypes({ control: 'select', options: selectListSize }),
    press: argTypes({ control: 'select', options: selectListPress }),
    rounded: argTypes({ control: 'select', options: selectListRounded }),
    disabled: argTypes({ control: 'boolean' }),
    slot: argTypes({ control: 'text' }),
    slotDirection: argTypes({ control: 'select', options: ['start', 'end', 'none'] }),
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { variant: 'primary' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  args: {
    children: 'button',
    variant: 'primary',
    rounded: 'default',
    size: 'full',
    press: 'default',
  },
};
