import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Inter } from 'next/font/google'

function Providers({children}) {
    return <main className={`dark ${inter.className}`}>
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark">{children}</NextThemesProvider>
        </NextUIProvider>
    </main>
    
}

export default Providers