import { Toaster } from '@/components/ui/toaster'
import { AppProvider } from '@/providers'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import 'reflect-metadata'
import 'reflect-metadata/lite'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Cloud Panel',
  description: 'Cloud Panel',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppProvider>{children}</AppProvider>
        <Toaster />
      </body>
    </html>
  )
}
