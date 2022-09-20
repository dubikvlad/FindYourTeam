import styled from 'styled-components'

type TextProps = {
  size?: number
  small?: boolean
  large?: boolean
  verysmall?: boolean
  bold?: boolean
  lh?: number
  mt?: number
  ml?: number
  mr?: number
  mb?: number
  pt?: number
  pl?: number
  pr?: number
  pb?: number
  maxWidth?: number | string
  maxHeight?: any
  height?: any
  align?: 'left' | 'center' | 'right'
  textColor?: string
  style?: any
  className?: any
}

export const Text = styled.p<TextProps>`
  font-family: ${(p) => p.theme.fonts.Gotham};
  font-size: ${({
    size = null,
    small = false,
    large = false,
    verysmall = false,
  }) =>
    size
      ? `${size}px`
      : verysmall
      ? '12px'
      : small
      ? '14px'
      : large
      ? '18px'
      : '16px'};
  font-weight: ${({ bold = false }) => (bold ? 'bold' : 'normal')};
  color: ${({ textColor = null, theme = null }) =>
    textColor ?? theme?.colors.black};
  line-height: ${({ lh = null, small = false, verysmall = false }) =>
    lh ? `${lh}px` : small ? '21px' : verysmall ? '19.5px' : '26px'};
  text-align: ${({ align = 'left' }) =>
    align === 'center' ? 'center' : align === 'right' ? 'right' : 'left'};
  ${({ mt }) => mt && `margin-top: ${mt}px;`}
  ${({ ml }) => ml && `margin-left: ${ml}px;`}
  ${({ mr }) => mr && `margin-right: ${mr}px;`}
  ${({ mb }) => mb && `margin-bottom: ${mb}px;`}
  ${({ pt }) => pt && `padding-top: ${pt}px;`}
  ${({ pl }) => pl && `padding-left: ${pl}px;`}
  ${({ pr }) => pr && `padding-right: ${pr}px;`}
  ${({ pb }) => pb && `padding-bottom: ${pb}px;`}
  ${({ maxWidth = null }) =>
    maxWidth !== null
      ? typeof maxWidth === 'number'
        ? `max-width: ${maxWidth}px;`
        : `max-width: ${maxWidth};`
      : null}
    ${({ maxHeight = null }) =>
    maxHeight !== null
      ? typeof maxHeight === 'number'
        ? `max-height: ${maxHeight}px;`
        : `max-height: ${maxHeight};`
      : null}

    ${({ height = null }) =>
    height !== null
      ? typeof height === 'number'
        ? `height: ${height}px;`
        : `height: ${height};`
      : null}
  overflow: hidden;
`

export default Text
