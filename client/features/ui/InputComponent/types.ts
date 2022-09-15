import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

export interface IInputProps {
  name: string
  type: string
  register: any
  watch?: string
  setValue: () => void
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
  required?: string
  className?: string
  placeholder?: string
  pattern?: IPattern
  defaultValue?: string
  isSearch?: boolean
  maxLength?: number
}

interface IPattern {
  value: RegExp
  message: string
}
