import type { Metadata } from 'next';
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: 'Daniel Oelinger - Code Demo',
    description: 'Einfache Seite zum Demonstrieren von Code-Beispielen.',
};

export default function CodeDemo({ children }: { children: React.ReactNode }) {
    return children;
}
