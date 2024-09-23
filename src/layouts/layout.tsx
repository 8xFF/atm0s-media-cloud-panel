'use client'

import { Header, SidebarDesktop } from '.'
import { map } from 'lodash'
import { ChevronLeftIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Fragment } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
} from '@/components'

type Props = {
  children: React.ReactNode
  breadcrumbs: {
    title: string
    href?: string
  }[]
  title: string
  hasBackButton?: boolean
  extra?: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children, breadcrumbs, title, hasBackButton, extra }) => {
  const router = useRouter()
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 pb-6">
      <SidebarDesktop />
      <div className="flex flex-col sm:gap-4 sm:pl-14">
        <Header title={title} />
        <main className="flex-1 p-4 sm:px-6 sm:py-0">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex h-7 items-center gap-2">
              {hasBackButton && (
                <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => router.back()}>
                  <ChevronLeftIcon className="h-4 w-4" />
                  <span className="sr-only">Back</span>
                </Button>
              )}
              <Breadcrumb>
                <BreadcrumbList className="flex-nowrap">
                  {map(breadcrumbs, (breadcrumb, index) => (
                    <Fragment key={index}>
                      <BreadcrumbItem>
                        {breadcrumb.href ? (
                          <BreadcrumbLink asChild>
                            <Link href={breadcrumb.href}>{breadcrumb.title}</Link>
                          </BreadcrumbLink>
                        ) : (
                          <BreadcrumbPage>{breadcrumb.title}</BreadcrumbPage>
                        )}
                      </BreadcrumbItem>
                      {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                    </Fragment>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            {extra}
          </div>
          {children}
        </main>
      </div>
    </div>
  )
}
