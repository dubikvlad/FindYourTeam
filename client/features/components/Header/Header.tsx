import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

import { StyledButton } from '@/features/src/styledComponents'

function Header() {
  return (
    <HeaderContaner>
      <Link href="/">
        <Logo>
          <LogoText>
            <span>Find</span>
            <span>Your</span>
            <span>Team</span>
          </LogoText>
        </Logo>
      </Link>
      <Main>
        <MianWrap>
          <div></div>
          <div className="buttons">
            <Link href="/registration">
              <Button buttonType="transparent">Sign In</Button>
            </Link>
            <Link href="/login">
              <Button ml={15}>Login</Button>
            </Link>
          </div>
        </MianWrap>
      </Main>
      <Side />
    </HeaderContaner>
  )
}

export default Header

const HeaderContaner = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 1;
`

const Logo = styled.div`
  display: flex;
  width: 130px;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 22px;
  line-height: 15.5px;
  padding: 17px 0;
  height: 80px;
  color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
`

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  span {
    &:nth-child(2) {
      padding-left: 1.4px;
    }
    &:nth-child(3) {
      padding-left: 6px;
    }
  }
`

const Main = styled.div`
  max-width: 1180px;
  flex: 3;
  display: flex;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.mainBkg};
  border-top: 0;
  border-bottom: 0;
  height: 100%;
  padding: 0 13px;
`

const MianWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  .buttons {
    display: flex;
  }
`

const Side = styled.div`
  width: 130px;
`

const Button = styled(StyledButton)``
