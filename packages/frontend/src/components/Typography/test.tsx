import { render, screen } from '../../utils/test-utils'

import Typography from '.'

describe('<Typography />', () => {
  it('should render the Typography p as default', () => {
    const { container } = render(<Typography>Some text</Typography>)

    const p = screen.getByText('Some text')

    expect(p).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the Typography as h1', () => {
    const { container } = render(<Typography as="h1">Heading 1</Typography>)

    screen.getByRole('heading', { name: /heading 1/i })

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'font-size': '4rem',
      'font-weight': '700',
    })
  })

  it('should render the Typography as h2', () => {
    const { container } = render(<Typography as="h2">Heading 2</Typography>)

    screen.getByRole('heading', { name: /heading 2/i })

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'font-size': '3rem',
      'font-weight': '700',
    })
  })

  it('should render the Typography as h3', () => {
    const { container } = render(<Typography as="h3">Heading 3</Typography>)

    screen.getByRole('heading', { name: /heading 3/i })

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'font-size': '2.5rem',
      'font-weight': '700',
    })
  })

  it('should render the Typography as h4', () => {
    const { container } = render(<Typography as="h4">Heading 4</Typography>)

    screen.getByRole('heading', { name: /heading 4/i })

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'font-size': '2rem',
      'font-weight': '700',
    })
  })

  it('should render the Typography as h5', () => {
    const { container } = render(<Typography as="h5">Heading 5</Typography>)

    screen.getByRole('heading', { name: /heading 5/i })

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'font-size': '1.5rem',
      'font-weight': '700',
    })
  })

  it('should render the Typography as h6', () => {
    const { container } = render(<Typography as="h6">Heading 6</Typography>)

    screen.getByRole('heading', { name: /heading 6/i })

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'font-size': '1rem',
      'font-weight': '700',
    })
  })

  it('should render the Typography with normal weight', () => {
    const { container } = render(<Typography weight="normal">Normal text</Typography>)

    screen.getByText('Normal text')

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'font-weight': '400',
    })
  })

  it('should render the Typography with medium weight', () => {
    const { container } = render(<Typography weight="medium">Medium text</Typography>)

    screen.getByText('Medium text')

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'font-weight': '500',
    })
  })

  it('should render the Typography with semibold weight', () => {
    const { container } = render(<Typography weight="semibold">Semibold text</Typography>)

    screen.getByText('Semibold text')

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'font-weight': '600',
    })
  })

  it('should render the Typography with bold weight', () => {
    const { container } = render(<Typography weight="bold">Bold text</Typography>)

    screen.getByText('Bold text')

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'font-weight': '700',
    })
  })

  it('should render the Typography with an extra small size', () => {
    const { container } = render(<Typography size="xs">Extra small text</Typography>)

    screen.getByText('Extra small text')

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'font-size': '0.75rem',
    })
  })

  it('should render the Typography with a small size', () => {
    const { container } = render(<Typography size="sm">Small text</Typography>)

    screen.getByText('Small text')

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'font-size': '0.875rem',
    })
  })

  it('should render the Typography with a medium size', () => {
    const { container } = render(<Typography size="md">Medium text</Typography>)

    screen.getByText('Medium text')

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'font-size': '1rem',
    })
  })

  it('should render the Typography with a large size', () => {
    const { container } = render(<Typography size="lg">Large text</Typography>)

    screen.getByText('Large text')

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'font-size': '1.5rem',
    })
  })

  it('should render the Typography with an extra large size', () => {
    const { container } = render(<Typography size="xl">Extra large text</Typography>)

    screen.getByText('Extra large text')

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'font-size': '2rem',
    })
  })

  it('should render the Typography with an extra large 2x size', () => {
    const { container } = render(<Typography size="2xl">Extra large 2x</Typography>)

    screen.getByText('Extra large 2x')

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'font-size': '2.5rem',
    })
  })

  it('should render the Typography with an extra large 3x size', () => {
    const { container } = render(<Typography size="3xl">Extra large 3x</Typography>)

    screen.getByText('Extra large 3x')

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'font-size': '3rem',
    })
  })

  it('should render the Typography with an extra large 4x size', () => {
    const { container } = render(<Typography size="4xl">Extra large 4x</Typography>)

    screen.getByText('Extra large 4x')

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'font-size': '4rem',
    })
  })

  it('should render the Typography with an extra large 5x size', () => {
    const { container } = render(<Typography size="5xl">Extra large 5x</Typography>)

    screen.getByText('Extra large 5x')

    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      'font-size': '6rem',
    })
  })
})
