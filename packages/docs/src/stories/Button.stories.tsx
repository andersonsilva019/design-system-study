import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@anderson-silva-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
  },
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'inline-radio' },
    },
    children: {
      control: { type: 'text' },
    },
  },
} as Meta<ButtonProps>

export const Basic: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
  },
}

export const withIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next Step
        <ArrowRight weight="bold" />
      </>
    ),
  },
}
