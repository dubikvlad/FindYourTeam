import { userData } from './types'
import { StyledPage, StyledContainer } from '@/features/src/styledComponents'
import styled from 'styled-components'
import Image from 'next/image'
import img from '@/assets/images/jpg/img.jpg'

export default function User({ data }: userData) {
  return (
    <StyledPage>
      <StyledContainer pt={0}>
        <ImgWrapper>
          <Image src={img} />
        </ImgWrapper>
      </StyledContainer>
    </StyledPage>
  )
}

const ImgWrapper = styled.div`
  margin-left: -30px;
  margin-right: -30px;
`
