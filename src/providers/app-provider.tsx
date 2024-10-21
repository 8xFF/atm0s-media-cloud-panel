'use client'

import { TooltipProvider } from '@/components'
import { SessionProvider } from 'next-auth/react'
import { ReactQueryProvider, RecoilProvider, ThemeProvider } from '.'

type Props = {
  children: React.ReactNode
}

export const AppProvider: React.FC<Props> = ({ children }) => {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <ReactQueryProvider>
          <RecoilProvider>
            <TooltipProvider>{children}</TooltipProvider>
          </RecoilProvider>
        </ReactQueryProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}
