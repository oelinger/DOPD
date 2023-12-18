'use client'
import {Navbar, NavbarBrand} from "@nextui-org/navbar";
import {DOPDLogo} from "@/app/components/Logo/DOPDLogo";

export const runtime = 'edge';

export default function Header() {
    return (
        <Navbar>
            <NavbarBrand>
                <DOPDLogo/>
            </NavbarBrand>
        </Navbar>
    );
}
