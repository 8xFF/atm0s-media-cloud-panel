import { Separator } from '@/components/ui/separator'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { useGetProjectsByIdQuery } from '@/hooks'
import { AppSidebar } from './app-sidebar'

type Props = {
  children: React.ReactNode
}

export * from './nav-user'

export const Layout: React.FC<Props> = ({ children }) => {
  const { data: projectsById, isFetching: isFetchingGetProjectsById } = useGetProjectsByIdQuery()

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="relative flex min-h-svh flex-1 flex-col bg-background peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow">
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <div>
              {!isFetchingGetProjectsById ? (
                <h1 className="flex-1 text-xl font-semibold">{projectsById?.name}</h1>
              ) : (
                <TitleLoader />
              )}
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </main>
    </SidebarProvider>
  )
}

const TitleLoader = () => {
  return (
    <div className="w-28 animate-pulse">
      <div className="space-y-1">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 h-2 rounded bg-slate-200" />
        </div>
        <div className="h-2 rounded bg-slate-200" />
      </div>
    </div>
  )
}
