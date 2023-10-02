import { Providers } from './providers'

export const metadata = {
    /* Included by default
    charset: "utf-8",
    viewport: "width=device-width, initial-scale=1.0"
    */
    title: 'KataDSA',
    description: 'Project Organizers with templates for practicing kata, data structures and algorithms',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}