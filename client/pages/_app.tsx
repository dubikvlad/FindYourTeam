import '@/assets/fonts/index.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Header from '@/features/components/Header'
import GlobalStyles from '@/features/src/styles/global'
import theme from '@/features/src/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
