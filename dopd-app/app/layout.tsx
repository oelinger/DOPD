import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}