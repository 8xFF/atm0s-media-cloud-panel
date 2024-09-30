'use client'

import { Header, SidebarDesktop } from '.'
import { map } from 'lodash'
import { ChevronLeftIcon, Copy } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
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
  const pathname = usePathname()
  const handleCopyToClipboard = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content)
    } catch (error) {
      console.log(error)
    }
  }
  const checkShowFilter = () => {
    const array = pathname?.split('/')
    if (array && array[array?.length - 1] === 'analytics') return true
    return false
  }
  const urlCopy = 'my-first-app-0u6dm2nk.livekit.cloud'
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
          {/* <div className="flex w-full items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="tex-sm text-[#ffffffcc]">{urlCopy}</span>
              <Copy onClick={() => handleCopyToClipboard(urlCopy)} className="h-5 w-5 cursor-pointer" />
            </div>
            {checkShowFilter() && (
              <div className="flex items-center justify-between gap-4">
                <span className="tex-md uppercase text-[#ffffffcc]">Filter by</span>
                <div className="w-fit">
                  <Select>
                    <SelectTrigger id="category" aria-label="Select" className="min-w-[100px] uppercase">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="24hour" className="uppercase">
                        last 24 hour
                      </SelectItem>
                      <SelectItem value="last-7day" className="uppercase">
                        last 7 days
                      </SelectItem>
                      <SelectItem value="last-28day" className="uppercase">
                        last 28 days
                      </SelectItem>
                      <SelectItem value="this-month" className="uppercase">
                        this month
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </div> */}
          {/* <p className="text-3xl font-semibold text-white mb-4">My first app</p> */}
          {children}
        </main>
      </div>
    </div>
  )
}
