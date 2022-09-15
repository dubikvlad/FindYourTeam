import styled from 'styled-components'

export type ContainerProps = {
  mb?: number
  mt?: number
  ml?: number
  mr?: number
  padding?: string
  pb?: number
  pt?: number
  pl?: number
  pr?: number
  type?: 'blue' | null
}

const Container = styled.div<ContainerProps>`
  position: relative;
  border-radius: 4px;
  background-color: ${(p) =>
    p.type === 'blue' ? `${p.theme.colors.blue2}` : `${p.theme.colors.white}`};

  margin-bottom: ${({ mb = null }) => !!mb && `${mb}px`};
  margin-top: ${({ mt = null }) => !!mt && `${mt}px`};
  margin-left: ${({ ml = null }) => !!ml && `${ml}px`};
  margin-right: ${({ mr = null }) => !!mr && `${mr}px`};

  padding: ${(p) => (p.padding ? `${p.padding}` : '25px 30px')};
  padding-bottom: ${({ pb = null }) => !!pb && `${pb}px`};
  padding-top: ${({ pt = null }) => !!pt && `${pt}px`};
  padding-left: ${({ pl = null }) => !!pl && `${pl}px`};
  padding-right: ${({ pr = null }) => !!pr && `${pr}px`};
`

export default Container
