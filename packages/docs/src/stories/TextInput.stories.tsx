import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@anderson-silva-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '$2',
          width: 480,
        }}
      >
        <Text size="sm">Email</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextInputProps>

export const Basic: StoryObj<TextInputProps> = {}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
