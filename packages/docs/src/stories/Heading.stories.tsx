import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@anderson-silva-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Testando o Heading',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    children: 'Testando o Heading com tag customizada (H1)',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
