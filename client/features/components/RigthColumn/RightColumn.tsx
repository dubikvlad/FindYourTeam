import React from 'react'
import { StyledContainer } from '@/features/src/styledComponents'
import styled from 'styled-components'
import { StyledText, StyledButton } from '@/features/src/styledComponents'

function RightColumn() {
  return (
    <StyledContainer>
      <Text verysmall bold transform="uppercase">
        Your dashboard
      </Text>
      <StatsContainer>
        <SatsNumber size={52} lh={50}>
          123
        </SatsNumber>
        took part events
      </StatsContainer>
      <StatsContainer>
        <SatsNumber size={52} lh={50}>
          12
        </SatsNumber>
        events organized
      </StatsContainer>
      <StyledButton mt={20}>Create Event</StyledButton>
    </StyledContainer>
  )
}

export default RightColumn

const Text = styled(StyledText)`
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`

const StatsContainer = styled.div`
  margin-top: 20px;
`

const SatsNumber = styled(StyledText)`
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 500;
`
