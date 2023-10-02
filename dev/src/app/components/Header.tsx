import React from 'react'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenuToggle,
    NavbarItem,
    Link,
    Button
} from '@nextui-org/react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

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
                    <p className="font-bold text-inherit">KataDSA</p>
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
                    
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Link href="/login"></Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}