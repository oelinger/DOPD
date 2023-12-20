import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import React from 'react';
import * as StyleX from '@stylexjs/stylex';
import Header from '@/app/components/Header/Header';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: 'D.O.P.D. - Daniel Oelinger - Photography & Design',
    description:
        'D.O.P.D. nimmt sich Photographie, Grafik-, Web- und UX-Design an. Mit Liebe zum Detail entstehen hier Werke mit Wert und Nutzen. Kontaktieren Sie uns jetzt!',
};

const style = StyleX.create({
    layout: {
        fontFamily: 'system-ui, sans-serif, serif, Arial',
        fontWeight: '400',
        fontSize: '1.5ch',
        '@media screen and (min-width: 768px)': {
            fontSize: '1.75ch',
        },
        '@media screen and (min-width: 1024px)': {
            fontSize: '2ch',
        },
    },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='de-AT' {...StyleX.props(style.layout)}>
            <body>
                <Header />
                <main>
                    <Providers>{children}</Providers>
                </main>
            </body>
        </html>
    );
}
