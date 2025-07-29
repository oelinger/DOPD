'use client';
import { Navbar, NavbarBrand, NavbarItem } from '@heroui/navbar';
import { DOPDLogo } from '@/app/components/Logo/DOPDLogo';
import Link from 'next/link';
import './Header.css';

export default function Header() {
    return (
        <Navbar className='header'>
            <NavbarBrand>
                <Link href={'/'}>
                    <DOPDLogo />
                </Link>
            </NavbarBrand>
            <div className='nav-item-container'>
                <NavbarItem className='nav-item'>
                    <Link className='nav-link' href={'/'}>
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem className='nav-item'>
                    <Link className='nav-link' href={'/#Gallery'}>
                        Gallerie
                    </Link>
                </NavbarItem>
            </div>
        </Navbar>
    );
}
