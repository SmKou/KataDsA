import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    /* Included by default
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0"
      */
    title: 'KataDSA',
    description: 'Project Organizer with templates for practicing kata, data structures and algorithms'
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
