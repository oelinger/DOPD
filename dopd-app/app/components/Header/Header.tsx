'use client';
import { Navbar, NavbarBrand } from '@nextui-org/navbar';
import { DOPDLogo } from '@/app/components/Logo/DOPDLogo';
import * as StyleX from '@stylexjs/stylex';
import Link from 'next/link';

export const runtime = 'edge';

const style = StyleX.create({
    header: {
        backgroundColor: 'transparent',
        height: '6rem',
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
        </Navbar>
    );
}
