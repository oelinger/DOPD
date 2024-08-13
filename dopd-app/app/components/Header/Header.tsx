'use client';
import { Navbar, NavbarBrand, NavbarItem } from '@nextui-org/navbar';
import { DOPDLogo } from '@/app/components/Logo/DOPDLogo';
import * as StyleX from '@stylexjs/stylex';
import Link from 'next/link';

export const runtime = 'edge';

const style = StyleX.create({
    header: {
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        '@media (prefers-color-scheme: dark)': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        height: '6rem',
    },
    navItem: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: '0.5rem',
        height: '100%',
        fontWeight: '600',
        textDecoration: 'none',
        padding: '0.5rem 1rem',
        ':hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            '@media (prefers-color-scheme: dark)': {
                backgroundColor: 'rgba(255, 255, 255, 0.25)',
            },
        },
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
});

export default function Header() {
    return (
        <Navbar {...StyleX.props(style.header)}>
            <NavbarBrand>
                <Link href={'/'}>
                    <DOPDLogo />
                </Link>
            </NavbarBrand>
            <NavbarItem {...StyleX.props(style.navItem)}>
                <Link {...StyleX.props(style.link)} href={'/'}>
                    Home
                </Link>
            </NavbarItem>
            <NavbarItem {...StyleX.props(style.navItem)}>
                <Link {...StyleX.props(style.link)} href={'/#Gallery'}>
                    Gallerie
                </Link>
            </NavbarItem>
        </Navbar>
    );
}
