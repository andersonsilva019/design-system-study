import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@anderson-silva-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o Box</Text>,
  },
  argsTypes: {
    children: {
      control: { type: null },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
