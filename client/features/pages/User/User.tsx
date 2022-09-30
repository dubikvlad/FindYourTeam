import { userData } from './types'
import {
  StyledPage,
  StyledContainer,
  StyledTitle,
  StyledButton,
  StyledText,
} from '@/features/src/styledComponents'
import RigthColumn from '@/features/components/RigthColumn'
import styled from 'styled-components'
import OpeningContainer from '@/features/components/OpeningContainer'
import Image from 'next/image'
import img from '@/assets/images/jpg/img.jpg'

export default function User({ data }: userData) {
  return (
    <StyledPage>
      <UserWrapper>
        <div className="lefty">
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
                  <StyledTitle type="h3">
                    Firstname Lastname
                    <span className="status"></span>
                  </StyledTitle>
                  <div className="location">
                    Saint Petersburg, Russian Federation
                  </div>
                </div>
                <div>
                  Freelance UX/UI designer, 80+ projects in web design, mobile
                  apps (iOS & android) and creative projects. Open to offers.
                </div>
                <div className="buttons">
                  <StyledButton mr={15}>Contact info</StyledButton>
                  <StyledButton buttonType={'white'}>Contact info</StyledButton>
                </div>
              </UserInfo>
            </UserData>
          </StyledContainer>
          <StyledContainer mt={30}>
            <StyledTitle type="h3">About</StyledTitle>
            <OpeningContainer>
              <StyledText small mt={15}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium aliquam, eaque perspiciatis commodi recusandae fugit
                dolorem. Voluptatum facilis consequatur sapiente autem illo
                ducimus, laboriosam dolores ipsa ea debitis minus enim.
              </StyledText>
            </OpeningContainer>
          </StyledContainer>
        </div>
        <div className="right">
          <RigthColumn />
        </div>
      </UserWrapper>
    </StyledPage>
  )
}

const UserWrapper = styled.div`
  display: flex;

  .right {
    margin-left: 40px;
    min-width: 290px;
    width: 290px;
    flex: 1;
  }
`

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
  flex: 1;

  .user-data {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    width: 100%;
  }

  .status {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-left: 8px;
    background-color: #0bd80b;
  }

  .location {
    font-size: 12px;
  }

  .buttons {
    display: flex;
    margin-top: 15px;
  }
`
