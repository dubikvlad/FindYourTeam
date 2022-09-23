import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

export default function LinksDev() {
  return (
    <Links>
      <Link href={'/event'}>
        <a>event</a>
      </Link>
      <Link href={'user'}>
        <a>user</a>
      </Link>
    </Links>
  )
}

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  a {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
`
