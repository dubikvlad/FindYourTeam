import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import { StyledButton } from '@/features/src/styledComponents'
import { StyledPage, StyledContainer } from '@/features/src/styledComponents'
export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <StyledPage>
      <LoginWrapper>
        <Form>
          <div className="head">Email:</div>
          <InputWrapper>
            <input
              type="text"
              {...register('email')}
              className="input"
              placeholder="E-mail"
            />
          </InputWrapper>
          <div className="head">Password:</div>
          <InputWrapper>
            <input
              type="text"
              {...register('password')}
              className="input"
              placeholder="Password"
              autoComplete="off"
            />
          </InputWrapper>
          <Button>Login</Button>
        </Form>
      </LoginWrapper>
    </StyledPage>
  )
}

const LoginWrapper = styled(StyledContainer)`
  margin: 0 auto;
  width: 460px;
`

const Button = styled(StyledButton)`
  width: 100%;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;

  .head {
    padding-bottom: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }

  .input {
    border: none;
    padding: 10px 5px;
    outline: none;
    position: relative;
    border: 1px solid transparent;
    width: 100%;

    :focus {
      border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
    }
  }
`

const InputWrapper = styled.div`
  width: 100%;
  margin: 20px 0 30px;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 1px;
    bottom: 1px;
    height: 1px;
    width: 0px;
    background-color: ${({ theme }) => theme.colors.blue};
    transition: width 0.3s;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`
