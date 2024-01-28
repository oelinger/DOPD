'use client';
import * as StyleX from '@stylexjs/stylex';
import { Link } from '@nextui-org/link';
import { usePathname } from 'next/navigation';

export const runtime = 'edge';

const style = StyleX.create({
    footer: {
        backgroundColor: 'transparent',
        height: '3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
    },
    link: {
        color: {
            default: '#000',
            '@media (prefers-color-scheme: dark)': '#fff',
        },
        textDecoration: {
            default: 'none',
            ':hover': 'underline',
        },
    },
    active: {
        display: 'none',
    },
});

export default function Footer() {
    const pathname = usePathname();
    const imprintPath = '/imprint';
    const privacyPath = '/privacy';

    return (
        <footer {...StyleX.props(style.footer)}>
            <Link href={imprintPath} {...StyleX.props(style.link, pathname === imprintPath ? style.active : null)}>
                Impressum
            </Link>
            <Link href={privacyPath} {...StyleX.props(style.link, pathname === privacyPath ? style.active : null)}>
                Datenschutz
            </Link>
        </footer>
    );
}
