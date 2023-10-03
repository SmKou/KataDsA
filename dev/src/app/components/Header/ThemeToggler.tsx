'use client'

import { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'

interface Props {
    theme: string | undefined,
    setTheme: (theme: string) => void
}

export default function ThemeToggler(props: Props) {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = props

    useEffect(() => setMounted(true), [])

    if(!mounted) return null

    switch(theme) {
        case 'light':
            return <Button onClick={() => setTheme('dark')}>Dark Mode</Button>
        default:
            return <Button onClick={() => setTheme('light')}>Light Mode</Button>
    }
}