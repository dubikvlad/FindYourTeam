import styled from 'styled-components'

type ButtonProps = {
  backgroundColor?: string
}

const Button = styled.button<ButtonProps>`
  position: relative;
  background: ${(p) =>
    p.backgroundColor ? `${p.backgroundColor}` : p.theme.colors.buttonBkg};
  padding: 10px 20px;
  border-radius: 4px;
  border-image-slice: 1;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  width: fit-content;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: -1px;
    right: -1px;
    background: ${(p) =>
      p.backgroundColor ? `${p.backgroundColor}` : p.theme.colors.buttonBkg};
    border-radius: 5px;
    z-index: -1;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.blue};
    &::before {
      background: ${({ theme }) => theme.colors.blue};
    }
  }
`

export default Button
