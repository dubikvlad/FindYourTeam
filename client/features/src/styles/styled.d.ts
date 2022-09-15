import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string
      mainBkg: string
      blue: string
      blue2: string
      buttonBkg: string
      gray: string
    }
    fonts: {
      Gotham: string
    }
  }
}
