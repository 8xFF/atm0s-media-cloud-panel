'use client'

import { CheckIcon, ListCheckIcon, MoreHorizontal, PlusIcon, Trash2 } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components'
import { useDeleteProjectsMutation } from '@/hooks'
import { selectedProjectState } from '@/recoils'
import { useRecoilState } from 'recoil'

export const NavProjects = () => {
  const { isMobile } = useSidebar()
  const [selectedProject, setSelectedProject] = useRecoilState(selectedProjectState)
  const { mutate: onDeleteProjects } = useDeleteProjectsMutation()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Projects</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton>
            {selectedProject ? (
              <>
                <CheckIcon />
                <span>{selectedProject?.name}</span>
              </>
            ) : (
              <TitleLoader />
            )}
          </SidebarMenuButton>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuAction showOnHover>
                <MoreHorizontal />
              </SidebarMenuAction>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48" side={isMobile ? 'bottom' : 'right'} align={isMobile ? 'end' : 'start'}>
              <DropdownMenuItem>
                <ListCheckIcon className="text-muted-foreground" />
                <span>Change Project</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <PlusIcon className="text-muted-foreground" />
                <span>Create Project</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Trash2 className="text-muted-foreground" />
                <span>Delete Project</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
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
