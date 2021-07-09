import { ReactNode } from 'react'
import { Wrapper } from './styles'

type Element = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p' | 'text' | 'label'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'

type Weight = 'normal' | 'medium' | 'semibold' | 'bold'

export type TypographyProps = {
  as?: Element
  size?: Size
  weight?: Weight
  headline?: boolean
  children: ReactNode
}

export default function Typography({
  as = 'p',
  size,
  weight,
  headline = false,
  children,
  ...rest
}: TypographyProps) {
  return (
    <Wrapper {...rest} as={as} size={size} weight={weight} headline={headline}>
      {children}
    </Wrapper>
  )
}
