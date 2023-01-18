import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@anderson-silva-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Testando o Text',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'strong',
    children: 'Testando o Text com tag customizada (strong)',
  },
}
