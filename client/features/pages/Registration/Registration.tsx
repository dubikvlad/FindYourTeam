import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import {
  StyledButton,
  StyledPage,
  StyledContainer,
} from '@/features/src/styledComponents'
import { InputComponent } from '@/features/ui'
export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm()

  return (
    <StyledPage>
      <LoginWrapper>
        <Form>
          <div className="head">Email:</div>
          <Input
            register={register}
            name="email"
            type="text"
            setValue={setValue}
            placeholder="Email"
            required
            // error="error"
            watch={watch('eamil')}
          />
          <div className="head">Password:</div>
          <Input
            register={register}
            name="password"
            type="text"
            setValue={setValue}
            placeholder="Password"
            required
            // error="error"
            watch={watch('password')}
            mb={0}
          />
          <Input
            register={register}
            name="consfirm_password"
            type="text"
            setValue={setValue}
            placeholder="Confirm password"
            required
            // error="error"
            watch={watch('consfirm_password')}
          />
          <div className="head">Name:</div>
          <Input
            register={register}
            name="name"
            type="text"
            setValue={setValue}
            placeholder="Name"
            required
            // error="error"
            watch={watch('name')}
          />
          <Button type="submit">Login</Button>
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

const Input = styled(InputComponent)`
  margin: 10px 0 30px;
`
