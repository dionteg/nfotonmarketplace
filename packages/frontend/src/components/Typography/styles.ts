import { Fragment } from 'react'
import styled, { css } from 'styled-components'
import { TypographyProps } from '.'

const sizes = {
  xs: css`
    font-size: 0.75rem;
  `,
  sm: css`
    font-size: 0.875rem;
  `,
  md: css`
    font-size: 1rem;
  `,
  lg: css`
    font-size: 1.5rem;
  `,
  xl: css`
    font-size: 2rem;
  `,
  '2xl': css`
    font-size: 2.5rem;
  `,
  '3xl': css`
    font-size: 3rem;
  `,
  '4xl': css`
    font-size: 4rem;
  `,
  '5xl': css`
    font-size: 6rem;
  `,
}

const weights = {
  normal: css`
    font-weight: 400;
  `,
  medium: css`
    font-weight: 500;
  `,
  semibold: css`
    font-weight: 600;
  `,
  bold: css`
    font-weight: 700;
  `,
}

const types = {
  h1: css`
    ${sizes['4xl']}
    ${weights['bold']}
  `,
  h2: css`
    ${sizes['3xl']}
    ${weights['bold']}
  `,
  h3: css`
    ${sizes['2xl']}
    ${weights['bold']}
  `,
  h4: css`
    ${sizes['xl']}
    ${weights['bold']}
  `,
  h5: css`
    ${sizes['lg']}
    ${weights['bold']}
  `,
  h6: css`
    ${sizes['md']}
    ${weights['bold']}
  `,
  span: css`
    ${sizes['md']}
  `,
  p: css`
    ${sizes['md']}
  `,
  text: css`
    ${sizes['md']}
  `,
  label: css`
    ${sizes['md']}
  `,
}

export const Wrapper = styled(Fragment)<Omit<TypographyProps, 'children'>>`
  ${({ as, size, weight, headline }) => css`
    ${as && types[as]}
    ${size && sizes[size]}
    ${weight && weights[weight]}
    ${headline &&
    css`
      text-transform: uppercase;
    `}
  `}
`
