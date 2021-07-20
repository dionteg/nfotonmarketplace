import styled, { css } from 'styled-components'

export const CTAContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutrals.white[400]};
  ${({ theme }) =>
    theme.variant === 'dark' &&
    css`
      background-color: ${({ theme }) => theme.colors.neutrals.black[500]};
    `};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.neutrals.gray[500]};
    font-size: 1rem;
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 0.75rem;
    }
  }

  h1 {
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 4rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.neutrals.black[400]};
    max-width: 35rem;
    @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
      max-width: 30rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
      font-size: 3rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 2.5rem;
    }

    ${({ theme }) =>
      theme.variant === 'dark' &&
      css`
        color: ${theme.colors.neutrals.white[400]};
      `};
  }

  span {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${({ theme }) => theme.colors.neutrals.gray[500]};
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    height: 3rem;
    border-radius: 90px;
    padding: 0 1.5rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 0.8rem;
    }
  }

  img {
    width: 40rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
      width: 26rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      width: 23rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      width: 20rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-top: 3rem;
      width: 19rem;
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  margin-top: 2.5rem;
  gap: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`

export const ButtonEarn = styled.button`
  background: ${({ theme }) => theme.colors.primary.blue};
  color: ${({ theme }) => theme.colors.neutrals.white[400]};
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`

export const ButtonDiscover = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.neutrals.white[600]};
  background: transparent;
  color: ${({ theme }) => theme.colors.neutrals.black[400]};
  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.colors.neutrals.white[400]};
    background: ${({ theme }) => theme.colors.neutrals.black[400]};
    border: 2px solid ${({ theme }) => theme.colors.neutrals.black[400]};
  }

  ${({ theme }) =>
    theme.variant === 'dark' &&
    css`
      background: transparent;
      color: ${theme.colors.neutrals.white[400]};

      &:hover {
        background: ${theme.colors.neutrals.white[400]};
        border: 2px solid ${({ theme }) => theme.colors.neutrals.white[400]};
        color: ${theme.colors.neutrals.black[400]};
      }
    `};
`
