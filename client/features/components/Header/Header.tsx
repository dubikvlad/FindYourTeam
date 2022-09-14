import React from 'react'
import styled from 'styled-components'

import Button from '@/features/ui/Button/Button'

function Header() {
  return (
    <HeaderContaner>
      <Logo>
        <span>Find</span>
        <span>Your</span>
        <span>Team</span>
      </Logo>
      <Main>
        <Button>Login</Button>
      </Main>
    </HeaderContaner>
  )
}

export default Header

const HeaderContaner = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 22px;
  line-height: 15.5px;
  padding: 17px 44px;
  height: 80px;
  color: ${({ theme }) => theme.colors.blue};
  span {
    &:nth-child(2) {
      padding-left: 3px;
    }
    &:nth-child(3) {
      padding-left: 6px;
    }
  }
`

const Main = styled.div`
  max-width: 1180px;
  flex: 3;
`
