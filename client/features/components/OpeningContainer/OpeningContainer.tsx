import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { OpeningContainerType } from './types'

export default function OpeningContainer({
  children,
  maxHeight = 100,
  buttonText = 'read more',
}: OpeningContainerType) {
  const data = useRef() as React.MutableRefObject<HTMLInputElement>
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    checkHeight(data, maxHeight)
  }, [data])

  useEffect(() => {
    if (isOpen) {
      data.current.style.maxHeight = data.current.scrollHeight + 'px'
    } else {
      data.current.style.maxHeight = `${maxHeight}px`
    }
  }, [data, isOpen])

  function checkHeight(
    container: React.MutableRefObject<HTMLInputElement>,
    maxHeight: number,
  ) {
    if (container.current.scrollHeight < maxHeight) {
      setIsOpen(true)
    } else setIsOpen(false)
  }

  return (
    <div>
      <Data ref={data} isOpen={isOpen}>
        {children}
      </Data>
      {!isOpen && (
        <Button
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          {buttonText}
        </Button>
      )}
    </div>
  )
}

const Data = styled.div<{ isOpen: boolean }>`
  overflow: hidden;
  ${(p) =>
    !p.isOpen &&
    css`
      background: linear-gradient(180deg, #181818 0%, rgba(24, 24, 24, 0) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    `}
  transition: max-height 0.5s, background 0.5s;
`
const Button = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 15px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
`
