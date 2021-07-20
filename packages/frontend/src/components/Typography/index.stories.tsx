import { Meta, Story } from '@storybook/react'
import Typography, { TypographyProps } from '.'

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {},
} as Meta

const Template: Story<TypographyProps> = (args) => (
  <Typography {...args}>{args.children}</Typography>
)

export const Default = Template.bind({})
Default.parameters = {}
Default.args = {
  children: 'Typography',
}

export const Hero = Template.bind({})
Hero.parameters = {}
Hero.args = {
  as: 'h1',
  size: '5xl',
  weight: 'bold',
  children: 'Hero',
}

export const Headline1 = Template.bind({})
Headline1.parameters = {}
Headline1.args = {
  as: 'h1',
  children: 'Heading 1',
}

export const Headline2 = Template.bind({})
Headline2.parameters = {}
Headline2.args = {
  as: 'h2',
  children: 'Heading 2',
}

export const Headline3 = Template.bind({})
Headline3.parameters = {}
Headline3.args = {
  as: 'h3',
  children: 'Heading 3',
}

export const Headline4 = Template.bind({})
Headline4.parameters = {}
Headline4.args = {
  as: 'h4',
  children: 'Heading 4',
}

export const Headline5 = Template.bind({})
Headline5.parameters = {}
Headline5.args = {
  as: 'h5',
  children: 'Heading 5',
}

export const Headline6 = Template.bind({})
Headline6.parameters = {}
Headline6.args = {
  as: 'h6',
  children: 'Heading 6',
}

export const Body1 = Template.bind({})
Body1.parameters = {}
Body1.args = {
  as: 'span',
  size: 'lg',
  children: 'Body text large for big paragraphs.',
}

export const Body1Bold = Template.bind({})
Body1Bold.parameters = {}
Body1Bold.args = {
  as: 'span',
  size: 'lg',
  weight: 'semibold',
  children: 'Body text large for big paragraphs.',
}

export const Body2 = Template.bind({})
Body2.parameters = {}
Body2.args = {
  size: 'md',
  children: 'Body text normal, used for most readble content.',
}

export const Body2Bold = Template.bind({})
Body2Bold.parameters = {}
Body2Bold.args = {
  size: 'md',
  weight: 'medium',
  children: 'Body text normal, used for most readble content.',
}

export const Caption = Template.bind({})
Caption.parameters = {}
Caption.args = {
  size: 'sm',
  children: 'Caption text normal, used for very small paragraphs.',
}

export const CaptionBold = Template.bind({})
CaptionBold.parameters = {}
CaptionBold.args = {
  size: 'sm',
  weight: 'medium',
  children: 'Caption text bold, used for very small paragraphs.',
}

export const Caption2 = Template.bind({})
Caption2.parameters = {}
Caption2.args = {
  size: 'xs',
  children: 'Caption text, could be used for secondary links or navigation elements.',
}

export const Caption2Bold = Template.bind({})
Caption2Bold.parameters = {}
Caption2Bold.args = {
  size: 'xs',
  weight: 'medium',
  children: 'Caption text bold, could be used for secondary links or navigation elements.',
}

export const HairlineLarge = Template.bind({})
HairlineLarge.parameters = {}
HairlineLarge.args = {
  size: 'md',
  weight: 'bold',
  headline: true,
  children: 'Hairline large',
}

export const HairlineSmall = Template.bind({})
HairlineSmall.parameters = {}
HairlineSmall.args = {
  size: 'xs',
  weight: 'bold',
  headline: true,
  children: 'Hairline small',
}

export const ButtonDefault = Template.bind({})
ButtonDefault.parameters = {}
ButtonDefault.args = {
  size: 'md',
  weight: 'bold',
  children: 'Button Default',
}

export const ButtonSmall = Template.bind({})
ButtonSmall.parameters = {}
ButtonSmall.args = {
  size: 'sm',
  weight: 'bold',
  children: 'Button small',
}
