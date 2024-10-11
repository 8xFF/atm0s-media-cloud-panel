'use client'

import { menus } from '.'
import { includes, map } from 'lodash'
import { PanelLeftIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button, Sheet, SheetContent, SheetTrigger } from '@/components'
import { cn } from '@/lib'
import { ChangeTheme } from '@/providers'

export const SidebarMobile = () => {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeftIcon size={20} />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <div className="flex h-full flex-col justify-between">
          <nav className="grid gap-4 font-medium">
            <Link
              href="/"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 font-semibold text-primary-foreground md:text-base"
            >
              <img src="/logo.svg" alt="" className="rounded border" />
              <span className="sr-only">Cloud Panel</span>
            </Link>
            {map(menus, (menu) => (
              <Link
                key={menu.title}
                href={menu.href}
                className={cn(
                  'flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground',
                  (includes(pathname, menu.href) && menu.href !== '/') || menu.href === pathname ? 'bg-muted' : ''
                )}
              >
                <menu.icon size={20} />
                {menu.title}
              </Link>
            ))}
          </nav>
          <ChangeTheme />
        </div>
      </SheetContent>
    </Sheet>
  )
}
