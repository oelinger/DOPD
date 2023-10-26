import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const bodyClass = inter.className + " bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center h-screen text-gray-700 dark:text-gray-200"

export const runtime = 'edge';

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
    <html lang="de-AT">
      <body className={bodyClass}>{children}</body>
    </html>
  )
}
