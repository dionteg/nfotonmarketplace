import { useTheme } from '../../hooks/useTheme'

import { CTAContainer, ButtonEarn, ButtonDiscover, Buttons } from './styles'

export default function CTA() {
  const {
    theme: { variant },
    changeSelectedTheme,
  } = useTheme()

  return (
    <CTAContainer>
      <div>
        <p>SAVE YOUR TIME WITH STACKS</p>
        <h1>Earn free crypto with Crypter</h1>
        <span>A creative agency that lead and inspire</span>
        <Buttons>
          <ButtonEarn onClick={() => changeSelectedTheme('light')}>Earn now</ButtonEarn>
          <ButtonDiscover onClick={() => changeSelectedTheme('dark')}>Discover more</ButtonDiscover>
        </Buttons>
      </div>
      <div>
        <img src={`img-cta-${variant === 'dark' ? 'dark.png' : 'light.png'}`} alt="" />
      </div>
    </CTAContainer>
  )
}
