import React from 'react'
import { StyledPage, StyledContainer } from '@/features/src/styledComponents'
import styled from 'styled-components'

export default function Event() {
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
            <div>
                
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