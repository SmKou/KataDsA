import React from 'react'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenuToggle,
    NavbarItem,
    Link,
    Button,
    ButtonGroup,
    NavbarMenu,
    NavbarMenuItem
} from '@nextui-org/react'
import { useTheme } from 'next-themes'
import ThemeToggler from './ThemeToggler'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const { theme, setTheme } = useTheme()

    const menuItems = [
        "Kata",
        "Data Structures",
        "Algorithms"
    ]

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle 
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <h1 className="font-bold text-inherit">KataDSA</h1>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/kata">Kata</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/data-structures">Data Structures</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/algorithms">Algorithms</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <ButtonGroup>
                        <ThemeToggler theme={theme} setTheme={setTheme} />
                        <Button href="/register" as={Link}>Register</Button>
                        <Button href="/login" as={Link}>Login</Button>
                    </ButtonGroup>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link color="foreground"
                        className="w-full"
                        href=""
                        size="lg"
                        >{item}</Link>
                    </NavbarMenuItem>
                ))}
                <br />
                <hr />
                <br />
                <NavbarMenuItem>
                    <ButtonGroup>
                        <ThemeToggler theme={theme} setTheme={setTheme} />
                        <Button href="/register" as={Link}>Register</Button>
                        <Button href="/login" as={Link}>Login</Button>
                    </ButtonGroup>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    )
}