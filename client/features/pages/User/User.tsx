import { userData } from './types'
import {
  StyledPage,
  StyledContainer,
  StyledTitle,
} from '@/features/src/styledComponents'
import styled from 'styled-components'
import Image from 'next/image'
import img from '@/assets/images/jpg/img.jpg'

export default function User({ data }: userData) {
  return (
    <StyledPage>
      <StyledContainer pt={0}>
        <ImgWrapper>
          <Image src={img} layout="fill" width={'100%'} height={'180px'} />
        </ImgWrapper>
        <UserData>
          <ImgContainer>
            <div className="img"></div>
          </ImgContainer>
          <UserInfo>
            <div className="user-data">
              <StyledTitle type="h3" mb={15}>
                Dmitry Kargaev
              </StyledTitle>
            </div>
          </UserInfo>
        </UserData>
      </StyledContainer>
    </StyledPage>
  )
}

const ImgWrapper = styled.div`
  margin-left: -30px;
  margin-right: -30px;
  height: 180px;
  overflow: hidden;
  position: relative;
  img,
  span {
    object-fit: cover;
  }
`

const UserData = styled.div`
  display: flex;
`

const ImgContainer = styled.div`
  position: relative;
  width: 170px;
  margin-right: 25px;

  .img {
    position: absolute;
    top: -20px;
    width: 170px;
    height: 170px;
    background: ${({ theme }) => theme.colors.blue};
    border-radius: 50%;
    border: 10px solid ${({ theme }) => theme.colors.white};
  }
`

const UserInfo = styled.div`
  min-height: 150px;
  padding-top: 25px;

  .user-data {
    display: flex;
  }
`
