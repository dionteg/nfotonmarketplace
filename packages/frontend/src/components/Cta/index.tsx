import { useTheme } from '../../hooks/useTheme'
import Typography from '../Typography'

import { CTAContainer, ButtonEarn, ButtonDiscover, Buttons } from './styles'

export default function CTA() {
  const {
    theme: { variant },
  } = useTheme()

  return (
    <CTAContainer>
      <div>
        <Typography as={'p'} headline>
          Save your time with stacks
        </Typography>
        <Typography as={'h1'}>Earn free crypto with Crypter</Typography>
        <Typography as={'span'}>A creative agency that lead and inspire</Typography>
        <Buttons>
          <ButtonEarn>Earn now</ButtonEarn>
          <ButtonDiscover>Discover more</ButtonDiscover>
        </Buttons>
      </div>
      <div>
        <img
          src={`${variant === 'dark' ? 'img-cta-dark.png' : 'img-cta-light.png'}`}
          alt="Obra de arte"
        />
      </div>
    </CTAContainer>
  )
}
