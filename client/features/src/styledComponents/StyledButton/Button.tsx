import styled, { css } from 'styled-components'

type ButtonProps = {
  backgroundColor?: string
  mb?: number
  mt?: number
  ml?: number
  mr?: number
  padding?: string
  pb?: number
  pt?: number
  pl?: number
  pr?: number
  buttonType?: 'transparent' | 'simple' | null
}

const Button = styled.button<ButtonProps>`
  position: relative;
  background: ${(p) =>
    p.backgroundColor ? `${p.backgroundColor}` : p.theme.colors.buttonBkg};
  padding: 10px 20px;
  border-radius: 4px;
  border-image-slice: 1;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  text-transform: uppercase;
  width: fit-content;
  cursor: pointer;

  margin-bottom: ${({ mb = null }) => !!mb && `${mb}px`};
  margin-top: ${({ mt = null }) => !!mt && `${mt}px`};
  margin-left: ${({ ml = null }) => !!ml && `${ml}px`};
  margin-right: ${({ mr = null }) => !!mr && `${mr}px`};

  padding: ${(p) => p.padding && `${p.padding}`};
  padding-bottom: ${({ pb = null }) => !!pb && `${pb}px`};
  padding-top: ${({ pt = null }) => !!pt && `${pt}px`};
  padding-left: ${({ pl = null }) => !!pl && `${pl}px`};
  padding-right: ${({ pr = null }) => !!pr && `${pr}px`};

  /* transition: background 0.2s; */

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
    box-shadow: 0 1px 1px 0 #cfcfcf, 0 2px 5px 0 #cfcfcf;
    border: 1px solid ${({ theme }) => theme.colors.blue};
    &::before {
      background: ${({ theme }) => theme.colors.blue};
    }
  }

  ${(p) =>
    p.buttonType === 'transparent' &&
    css`
      background: transparent;
      color: ${(p) => p.theme.colors.blue};
      /* border: 1px solid ${(p) => p.theme.colors.blue}; */
      transition: border 0.15s, box-shadow 0.18s;
      border: 1px solid transparent;

      &::before {
        display: none;
      }

      &:hover {
        /* background: rgba(0, 0, 0, 0.3); */
        background: transparent;
        /* background: ${(p) => p.theme.colors.blue}; */
        /* color: white; */
        /* box-shadow: 0px -10px 13px -13px rgba(2, 117, 177, 0.51) inset; */
        border: 1px solid transparent;
        /* border: 1px solid ${(p) => p.theme.colors.blue}; */
        box-shadow: 0 1px 1px 0 #cfcfcf, 0 2px 5px 0 #cfcfcf;

        &::before {
          display: none;
        }
      }
    `}

  ${(p) =>
    p.buttonType === 'simple' &&
    css`
      background: ${(p) => p.theme.colors.blue};
      color: ${(p) => p.theme.colors.white};
      border: 1px solid ${(p) => p.theme.colors.blue};

      &::before {
        display: none;
      }
    `}
`

export default Button
