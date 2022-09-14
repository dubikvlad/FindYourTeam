import React from 'react'
import styled from 'styled-components'

function Button({ children }) {
  return <Container>{children}</Container>
}

export default Button

const Container = styled.div`
  background: linear-gradient(180deg, #0077b5 0%, #0e6795 100%);
  padding: 10px 20px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  width: fit-content;
  cursor: pointer;
`
