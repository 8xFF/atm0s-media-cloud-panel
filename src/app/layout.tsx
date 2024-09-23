import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Toaster } from 'sonner'
import { MainProvider } from '@/providers'

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
        <MainProvider>{children}</MainProvider>
        <Toaster richColors />
      </body>
    </html>
  )
}
