'use client';
import { Link } from '@heroui/link';
import { usePathname } from 'next/navigation';
import './Footer.css';

export default function Footer() {
    const pathname = usePathname();
    const imprintPath = '/imprint';
    const privacyPath = '/privacy';

    return (
        <footer className='footer'>
            <Link href={imprintPath} className={`footer-link ${pathname === imprintPath ? 'active' : ''}`}>
                Impressum
            </Link>
            <Link href={privacyPath} className={`footer-link ${pathname === privacyPath ? 'active' : ''}`}>
                Datenschutz
            </Link>
        </footer>
    );
}
