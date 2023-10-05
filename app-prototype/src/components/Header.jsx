import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenuToggle,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
    ButtonGroup,
    Chip
} from '@nextui-org/react'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

function Header(props) {
    const [mounted, setMounted] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])
    if (!mounted) return null

    return <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
            <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" />
            <NavbarBrand>
                <h1 className="font-bold text-inherit">KataDSA</h1>
                <Chip size="md" color="secondary">{props.page}</Chip>
            </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
            <NavbarItem>
                <Button color="foreground" onClick={() => props.setPage(props.pages.Kata)}>Kata</Button>
            </NavbarItem>
            <NavbarItem>
                <Button color="foreground" onClick={() => props.setPage(props.pages.DataStructures)}>Data Structures</Button>
            </NavbarItem>
            <NavbarItem>
                <Button color="forefround" onClick={() => props.setPage(props.pages.Algorithms)}>Algorithms</Button>
            </NavbarItem>
            <NavbarItem className="hidden lg:flex">
                <ButtonGroup>
                    {theme === 'light' ? 
                        <Button onClick={() => setTheme('dark')}>Dark Mode</Button>
                        : <Button onClick={() => setTheme('light')}>Light Mode</Button>
                    }
                    <Button color="foreground" onClick={() => props.setPage(props.pages.Login)}>Login</Button>
                </ButtonGroup>
            </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
            <NavbarMenuItem>
            <Button color="foreground" className="w-full" size="lg" onClick={() => props.setPage(props.pages.Kata)}>Kata</Button>
            </NavbarMenuItem>
            <NavbarMenuItem>
                <Button color="foreground" className="w-full" size="lg" onClick={() => props.setPage(props.pages.DataStructures)}>Data Structures</Button>
            </NavbarMenuItem>
            <NavbarMenuItem>
                <Button color="forefround" className="w-full" size="lg" onClick={() => props.setPage(props.pages.Algorithms)}>Algorithms</Button>
            </NavbarMenuItem>
            <br />
            <NavbarMenuItem>
                <ButtonGroup>
                    {theme === 'light' ? 
                        <Button onClick={() => setTheme('dark')}>Dark Mode</Button>
                        : <Button onClick={() => setTheme('light')}>Light Mode</Button>
                    }
                    <Button color="foreground" onClick={() => props.setPage(props.pages.Login)}>Login</Button>
                </ButtonGroup>
            </NavbarMenuItem>
        </NavbarMenu>
    </Navbar>
}

export default Header