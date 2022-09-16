export interface IInputProps {
  name: string
  type: string
  register: any
  placeholder: string
  setValue: (value1: string, value2: string) => void
  watch?: string
  error?: boolean | string | undefined
  required?: string | boolean
  className?: string | undefined
  pattern?: IPattern
  defaultValue?: string
  isSearch?: boolean
  maxLength?: number
  mb?: number
  mt?: number
  ml?: number
  mr?: number
}

interface IPattern {
  value: RegExp
  message: string
}
