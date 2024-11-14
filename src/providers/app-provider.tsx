import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import { routes } from '@/routes'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './auth-provider'
import { ReactQueryProvider } from './react-query-provider'
import { RecoilProvider } from './recoil-provider'
import { ThemeProvider } from './theme-provider'

type Props = {}

export const AppProvider: React.FC<Props> = () => {
  return (
    <>
      <AuthProvider>
        <ThemeProvider storageKey="vite-ui-theme">
          <ReactQueryProvider>
            <RecoilProvider>
              <TooltipProvider>
                <RouterProvider router={routes} />
              </TooltipProvider>
            </RecoilProvider>
          </ReactQueryProvider>
        </ThemeProvider>
      </AuthProvider>
      <Toaster />
    </>
  )
}
