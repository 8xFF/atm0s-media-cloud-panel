'use client'

import { IconBrandDiscord } from '@tabler/icons-react'
import {
  AlignHorizontalDistributeCenterIcon,
  ArrowLeftRightIcon,
  BookOpenIcon,
  ChartPieIcon,
  CreditCardIcon,
  Settings2Icon,
} from 'lucide-react'

import { NavMain } from '@/components/nav-main'
import { NavProjects } from '@/components/nav-projects'
import { NavSecondary } from '@/components/nav-secondary'
import { NavUser } from '@/components/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui'
import Link from 'next/link'

const data = {
  navMain: [
    {
      title: 'Analytics',
      url: '/',
      icon: ChartPieIcon,
      isActive: true,
    },
    {
      title: 'Sessions',
      url: '/sessions',
      icon: ArrowLeftRightIcon,
    },
    {
      title: 'Rooms',
      url: '/rooms',
      icon: AlignHorizontalDistributeCenterIcon,
    },
    {
      title: 'Billing',
      url: '/billing',
      icon: CreditCardIcon,
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: Settings2Icon,
      items: [
        {
          title: 'Project',
          url: '/settings',
        },
        {
          title: 'Keys',
          url: '/settings/keys',
        },
        {
          title: 'Webhooks',
          url: '/settings/webhooks',
        },
        {
          title: 'Members',
          url: '/settings/members',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Documentation',
      url: '/',
      icon: BookOpenIcon,
    },
    {
      title: 'Discord',
      url: 'https://discord.gg/g5KYHRKS52',
      icon: IconBrandDiscord,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center overflow-hidden rounded-lg">
                  <img src="/logo.svg" alt="" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">8xFF</span>
                  <span className="truncate text-xs">Decentralize. Innovate. Open.</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}
