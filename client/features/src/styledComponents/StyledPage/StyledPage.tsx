import styled from 'styled-components'

export type PageProps = {
  mb?: number
  main?: boolean
}

const Page = styled.div<PageProps>`
  position: relative;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto ${({ mb = null }) => !!mb && `${mb}px`};
  padding: 40px 130px 0;
  ${(p) => !!p.main && `flex-grow: 1;`}
`

export default Page
