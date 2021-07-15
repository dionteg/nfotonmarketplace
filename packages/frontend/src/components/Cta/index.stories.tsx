import { Meta, Story } from '@storybook/react'

import CTA from '.'

export default {
  title: 'Components/CTA',
  component: CTA,
  argTypes: {},
} as Meta

const Template: Story = () => <CTA />

export const CTATemplate = Template.bind({})

CTATemplate.parameters = {}
CTATemplate.args = {}
