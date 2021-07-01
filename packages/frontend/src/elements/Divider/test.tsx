import { render, screen } from '../../utils/test-utils'

import Divider from '.'

describe('<Divider />', () => {
  it('should render the Divider with a light height', () => {
    const { container } = render(<Divider height="light" />)

    screen.getByRole('separator', { hidden: true })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the Divider with a thin height', () => {
    const { container } = render(<Divider height="thin" />)

    screen.getByRole('separator', { hidden: true })

    expect(container.firstChild).toHaveStyle({
      border: '0',
      height: '2px',
      background: '#E6E8EC'
    })
  })
})
