import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string
      blue: string
    }
    fonts: {
      Gotham: string
    }
  }
}
