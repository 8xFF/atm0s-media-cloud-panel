'use client'

import { SidebarMobile } from '.'
import { Avatar } from '@/components'

type Props = {
  title: string
}

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
      <SidebarMobile />
      <h1 className="flex-1 text-xl font-semibold">{title}</h1>
      <div className="flex items-center gap-2">
        <Avatar />
      </div>
    </header>
  )
}
