import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@anderson-silva-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Testando o Text',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'strong',
    children: 'Testando o Text com tag customizada (strong)',
  },
}
