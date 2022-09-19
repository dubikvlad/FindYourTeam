import styled from 'styled-components'
import { FC } from 'react'

type TextProps = {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  bold?: boolean
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

export default function Text({
  type = 'h6',
  children = null,
  bold = true,
  mt,
  ml,
  mr,
  mb,
  pt,
  pl,
  pr,
  pb,
  maxWidth,
  align,
  textColor,
}: TextProps) {
  return (
    <TextStyle
      as={type}
      type={type}
      bold={bold}
      mt={mt}
      ml={ml}
      mr={mr}
      mb={mb}
      pt={pt}
      pl={pl}
      pr={pr}
      pb={pb}
      maxWidth={maxWidth}
      align={align}
      textColor={textColor}
    >
      {children}
    </TextStyle>
  )
}
const TextStyle = styled.p<TextProps>`
  font-family: ${({ theme }) => theme.fonts.Gotham};
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
