import React, { useState, useRef, useEffect } from 'react'
import {
  StyledPage,
  StyledContainer,
  StyledTitle,
  StyledText,
} from '@/features/src/styledComponents'
import styled from 'styled-components'

export default function Event() {
  const [isOpen, setIsOpen] = useState(false)
  const text = useRef() as React.MutableRefObject<HTMLInputElement>

  console.log('text.current', text.current)

  useEffect(() => {
    if (isOpen) {
      text.current.style.maxHeight = text.current.scrollHeight + 'px'
    } else {
      text.current.style.maxHeight = '100px'
    }
  }, [text.current, isOpen])


  return (
    <StyledPage>
      <StyledContainer>
        <User>
          <UserIcon></UserIcon>
          <UserData>
            <span className="username">Username</span>
            <span className="user-data">user add info</span>
          </UserData>
        </User>
        <EventWrapper>
          <StyledTitle type="h3" mb={15}>
            Tile
          </StyledTitle>
          <div>
            <StyledText size={14} ref={text}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
              aperiam quia autem distinctio, aliquid sunt nihil vel rerum eum
              impedit ipsa eveniet tempora veniam dolor repellat, dolore
              assumenda facere atque! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptates, ab. Quod, quas? Deleniti, incidunt
              voluptatem optio saepe veniam minima totam odio placeat fugit iste
              maxime. Officia deserunt exercitationem consequuntur dolorem?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              libero velit quia ut ipsa consequatur labore eos placeat
              voluptatum! Assumenda doloribus a perspiciatis dolor quidem
              tempore impedit culpa placeat alias. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Tempora harum voluptatibus magni
              soluta quos voluptates debitis, autem, placeat doloribus et
              quibusdam. Vel minus commodi tempore eius cum unde, dicta dolorem!
            </StyledText>
            <button
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              burron
            </button>
          </div>
        </EventWrapper>
      </StyledContainer>
    </StyledPage>
  )
}

const User = styled.div`
  display: flex;
  align-items: center;
`

const UserIcon = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  margin-right: 15px;
  background-color: ${({ theme }) => theme.colors.blue};
`

const UserData = styled.div`
  display: flex;
  flex-direction: column;

  .username {
    font-size: 14px;
    font-weight: bold;
  }

  .user-data {
    font-size: 10px;
    margin-top: 5px;
  }
`

const EventWrapper = styled.div`
  padding-top: 15px;
`
