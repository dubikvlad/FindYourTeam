import styled from 'styled-components'
import { FC } from 'react'

type TextProps = {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | null
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
  align?: 'left' | 'center' | 'right'
  textColor?: string
  children: any
}

export default function Text({ type, children = null }: TextProps) {
  {
    switch (type) {
      case 'h1':
        return <h1>{children}</h1>
    }
  }
}
const TextStyle = styled.p<TextProps>`
  font-family: ${(p) => p.theme.fonts.Gotham};
  font-weight: ${({ bold = false }) => (bold ? 'bold' : 'normal')};
  color: ${({ textColor = null, theme = null }) =>
    textColor ?? theme?.colors.black};
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
`

// export default Text
