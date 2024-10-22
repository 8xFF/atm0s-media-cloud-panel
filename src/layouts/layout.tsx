'use client'

import { AppSidebar } from '@/components'
import { SidebarProvider, SidebarTrigger } from '@/components/ui'
import { useGetProjectsQuery } from '@/hooks'
import { selectedProjectState } from '@/recoils'
import { isEmpty } from 'lodash'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

type Props = {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  const { data: projects } = useGetProjectsQuery()
  const [selectedProject, setSelectedProject] = useRecoilState(selectedProjectState)

  useEffect(() => {
    if (!isEmpty(projects)) {
      setSelectedProject(projects?.list?.[0])
    }
  }, [projects, setSelectedProject])

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="relative flex min-h-svh flex-1 flex-col bg-background peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow">
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger />
            <div>
              {selectedProject ? <h1 className="flex-1 text-xl font-semibold">{selectedProject?.name}</h1> : <TitleLoader />}
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
