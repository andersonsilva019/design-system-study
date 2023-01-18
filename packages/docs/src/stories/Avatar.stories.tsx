import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@anderson-silva-ui/react'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/andersonsilva019.png',
    alt: 'Anderson Silva',
  },
  argsTypes: {
    src: {
      control: { type: 'text' },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const withFallback: StoryObj<AvatarProps> = {
  args: {
    src: '',
  },
}
