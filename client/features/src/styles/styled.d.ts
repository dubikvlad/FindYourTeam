import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string
      black: string
      mainBkg: string
      blue: string
      blue2: string
      buttonBkg: string
      gray: string
      gray2: string
      red: string
    }
    fonts: {
      Gotham: string
    }
  }
}
