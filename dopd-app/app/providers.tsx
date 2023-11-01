'use client'

import {NextUIProvider} from '@nextui-org/react'

export const runtime = 'edge';

export function Providers({children}: { children: React.ReactNode }) {
    return (
            <NextUIProvider>
                {children}
            </NextUIProvider>
    )
}
