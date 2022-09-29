import React, { useState, useRef, useEffect } from 'react'
import {
  StyledPage,
  StyledContainer,
  StyledTitle,
  StyledText,
} from '@/features/src/styledComponents'
import styled, { css } from 'styled-components'
import OpeningContainer from '@/features/components/OpeningContainer'

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
          <StyledTitle type="h3" mb={15}>
            Tile
          </StyledTitle>
          <OpeningContainer>
            <StyledText size={14}>
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
          </OpeningContainer>
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
