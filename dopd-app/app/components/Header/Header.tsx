'use client';
import { Navbar, NavbarBrand } from '@nextui-org/navbar';
import { DOPDLogo } from '@/app/components/Logo/DOPDLogo';
import * as StyleX from '@stylexjs/stylex';

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
                <DOPDLogo />
            </NavbarBrand>
        </Navbar>
    );
}
