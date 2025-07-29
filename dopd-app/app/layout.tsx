import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import React from 'react';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const metadata: Metadata = {
    title: 'D.O.P.D. - Daniel Oelinger - Photography & Design',
    description:
        'D.O.P.D. nimmt sich Photographie, Grafik-, Web- und UX-Design an. Mit Liebe zum Detail entstehen hier Werke mit Wert und Nutzen. Kontaktieren Sie uns jetzt!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='de-AT' className='layout'>
            <body className='body'>
                <Header />
                <main>
                    <Providers>{children}</Providers>
                </main>
                <Footer />
            </body>
        </html>
    );
}
