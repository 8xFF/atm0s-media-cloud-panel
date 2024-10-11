'use client'

import { includes, map } from 'lodash'
import { BlocksIcon, ClockIcon, CreditCardIcon, Settings, TrendingUpIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components'
import { cn } from '@/lib'
import { ChangeTheme } from '@/providers'

export const menus = [
  {
    title: 'Analytics',
    href: '/',
    icon: TrendingUpIcon,
  },
  {
    title: 'Sessions',
    href: '/sessions',
    icon: ClockIcon,
  },
  {
    title: 'Rooms',
    href: '/rooms',
    icon: BlocksIcon,
  },
  {
    title: 'Billing',
    href: '/billing',
    icon: CreditCardIcon,
  },
]

export const SidebarDesktop = () => {
  const pathname = usePathname()
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
        <Link
          href="/"
          className="group flex h-8 w-8 shrink-0 items-center justify-center gap-2 text-base font-semibold text-primary-foreground"
        >
          <img src="/logo.svg" alt="" className="rounded border" />
          <span className="sr-only">Cloud Panel</span>
        </Link>
        {map(menus, (menu) => (
          <Tooltip key={menu.title}>
            <TooltipTrigger asChild>
              <Link
                href={menu.href}
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:text-foreground',
                  (includes(pathname, menu.href) && menu.href !== '/') || menu.href === pathname
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground'
                )}
              >
                <menu.icon size={20} />
                <span className="sr-only">{menu.title}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{menu.title}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
        <ChangeTheme variant="link" />
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/setting"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Settings size={20} />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  )
}
