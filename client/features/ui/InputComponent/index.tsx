import { memo, useState, FC } from 'react'
import styled, { css } from 'styled-components'

import { IInputProps } from './types'

const InputComponent: FC<IInputProps> = memo(
  ({
    name,
    type,
    className = undefined,
    required = null,
    watch = null,
    error,
    pattern = null,
    register,
    setValue,
    placeholder,
    defaultValue = null,
    isSearch = false,
    maxLength = null,
    mb,
    mt,
    ml,
    mr,
  }) => {
    const [passVisibility, setPassVisibility] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    console.log('mb', mb)

    const clearInputField = () => {
      setValue(name, '')
    }

    return (
      <>
        <InputWrapper
          className={className}
          error={error}
          isFocused={isFocused}
          mb={mb}
          mt={mt}
          ml={ml}
          mr={mr}
        >
          {isSearch && (
            <span>
              {/* <SearchIcon className={classes.search} width={24} height={24} /> */}
            </span>
          )}
          <input
            id={name}
            type={passVisibility ? 'text' : type}
            {...register(name, {
              required: required,
              pattern: {
                value: pattern?.value,
                message: pattern?.message,
              },
            })}
            placeholder={placeholder}
            defaultValue={defaultValue}
            maxLength={maxLength}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          <div>
            {watch && (
              <span onClick={() => clearInputField()}>
                {/* <CrossCircleIcon /> */}
              </span>
            )}

            {type === 'password' && (
              <span onClick={() => setPassVisibility(!passVisibility)}>
                {/* {passVisibility ? <OpenEyeIcon /> : <CloseEyeIcon />} */}
              </span>
            )}
          </div>
        </InputWrapper>
        {error && <Error>{error}</Error>}
      </>
    )
  },
)

InputComponent.displayName = 'InputComponent'

export default InputComponent

type SInputWrapper = {
  error: boolean | string | undefined
  isFocused: boolean
  mb?: number
  mt?: number
  ml?: number
  mr?: number
}

const InputWrapper = styled.div<SInputWrapper>`
  width: 100%;
  margin: 10px 0 30px;

  ${(p) =>
    p.error &&
    css`
      margin-bottom: 0px !important;
    `};

  position: relative;

  margin-bottom: ${(p) => p.mb && `${p.mb}px`};
  margin-top: ${({ mt = null }) => mt && `${mt}px`};
  margin-left: ${({ ml = null }) => ml && `${ml}px`};
  margin-right: ${({ mr = null }) => mr && `${mr}px`};

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 1px;
    bottom: 1px;
    height: 1px;
    width: ${(p) => (p.error || p.isFocused ? `100%` : `0`)};
    background-color: ${(p) =>
      p.error ? p.theme.colors.red : p.theme.colors.blue};
    ${(p) =>
      !!p.error &&
      css`
        margin-bottom: 0px;
      `};
    transition: width 0.3s;
  }

  input {
    border: none;
    padding: 10px 5px;
    outline: none;
    position: relative;
    border: 1px solid transparent;
    width: 100%;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`

const Error = styled.div`
  color: ${({ theme }) => theme.colors.gray2};
  height: 15px;
  margin-bottom: 15px;
`
