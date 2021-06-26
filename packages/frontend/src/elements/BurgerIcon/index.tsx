import { Container } from './styles'

import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { IoCloseOutline } from 'react-icons/io5'
import { useTheme } from '../../hooks/useTheme'
import { IconBaseProps } from 'react-icons'

interface BurgerIconProps extends IconBaseProps {
  variant: 'closed' | 'open'
}

export default function BurgerIcon({ variant, size = 20, ...rest }: BurgerIconProps) {
  const {
    theme: {
      colors: {
        neutrals: { gray },
      },
    },
  } = useTheme()
  const baseStyle = { ...rest, size, color: gray['500'] }
  return (
    <Container>
      {variant === 'closed' && <HiOutlineMenuAlt4 {...baseStyle} />}
      {variant === 'open' && <IoCloseOutline {...baseStyle} />}
    </Container>
  )
}
