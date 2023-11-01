import type {Metadata} from 'next';
import 'normalize.css/normalize.css';
import '../globals.css';
import {Providers} from "@/app/providers";
import React from "react";

//export const runtime = 'edge';

export const metadata: Metadata = {
    title: 'D.O.P.D. - Daniel Oelinger - Photography & Design',
    description: 'D.O.P.D. nimmt sich Photographie, Grafik-, Web- und UX-Design an. Mit Liebe zum Detail entstehen hier Werke mit Wert und Nutzen. Kontaktieren Sie uns jetzt!',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
            <html lang="de-AT" className="dark">
            <body>
            <main>
                <Providers>
                    {children}
                </Providers>
            </main>
            </body>
            </html>
    )
}
