// 1. import `NextUIProvider` component
import { NextUIProvider, createTheme } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export  const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      background:"#F5F5F5",
      text:"black",
    },
    breakpoints:{
      xs: '375px',
      sm: '960px',
      md: '1280px',
      lg: '1400px',
      xl: '1920px'
    }
  }
})

export const darkTheme = createTheme({
  type:"dark",
  theme:{
    colors:{
      background:"#1a1a1a",
      text: "#fff",
    },
    breakpoints:{
      xs: '375px',
      sm: '960px',
      md: '1280px',
      lg: '1400px',
      xl: '1920px'
    }
  }
})

function MyApp({ Component, pageProps }) {
  // 2. Use at the root of your app
  const getLayout = Component.getLayout || ((page) => page)
  return(
    <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  )
    
  
}

export default MyApp

