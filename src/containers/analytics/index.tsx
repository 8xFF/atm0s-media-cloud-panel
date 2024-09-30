'use client'

import { listData1, listListConnection, TypeListConnection } from './const'
import { map } from 'lodash'
import { CircleAlert } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Layout } from '@/layouts'

export const Analytics = () => {
  return (
    <Layout
      breadcrumbs={
        [
          // {
          //   title: 'Analytics',
          //   href: '/analytics',
          // }
        ]
      }
      title="Analytics"
    >
      <div className="flex min-h-screen w-full flex-col">
        <p className="mb-4 text-3xl font-semibold text-white">My first app</p>
        <main className="flex flex-col items-start gap-4 sm:py-0 md:gap-8">
          <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
            <CardHeader className="pb-3">
              <CardTitle>Build on our sample apps</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Check out our sample apps to see what you can build with 8xFF.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {map(listData1, (item) => (
                <Card key={item.title} className="flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription className="max-w-lg text-balance leading-relaxed">{item.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex flex-wrap gap-4">
                    <Button className="gap-2 border-[1px] border-[#2F2F2F] bg-[#131313] text-white hover:border-[#1f1f1f] hover:!bg-[#2F2F2F]">
                      <svg viewBox="0 0 45 44" focusable="false" className="h-4 w-4" role="img" aria-labelledby="title">
                        <title id="title" lang="en">
                          GitHub Logo
                        </title>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.4773 0.926671C10.4853 0.926671 0.76001 10.6507 0.76001 22.6467C0.76001 32.2427 6.98268 40.3827 15.6133 43.2547C16.7 43.4547 17.096 42.784 17.096 42.208C17.096 41.692 17.0773 40.3267 17.0667 38.5147C11.0253 39.8267 9.75068 35.6027 9.75068 35.6027C8.76268 33.0933 7.33869 32.4253 7.33869 32.4253C5.36669 31.0787 7.48802 31.1053 7.48802 31.1053C9.66802 31.2587 10.8147 33.344 10.8147 33.344C12.752 36.6627 15.8987 35.704 17.136 35.148C17.3334 33.7453 17.8947 32.788 18.5147 32.2453C13.692 31.6973 8.62135 29.8333 8.62135 21.5107C8.62135 19.14 9.46802 17.2 10.8574 15.6827C10.6334 15.1333 9.88802 12.924 11.0707 9.93466C11.0707 9.93466 12.8933 9.35067 17.0427 12.1613C18.7747 11.6787 20.6333 11.4387 22.48 11.4293C24.3253 11.4387 26.1827 11.6787 27.9173 12.1613C32.064 9.35067 33.884 9.93466 33.884 9.93466C35.0693 12.924 34.324 15.1333 34.1013 15.6827C35.4933 17.2 36.3333 19.14 36.3333 21.5107C36.3333 29.8547 31.2547 31.6907 26.4173 32.228C27.196 32.8987 27.8907 34.224 27.8907 36.2493C27.8907 39.1533 27.864 41.496 27.864 42.208C27.864 42.7893 28.256 43.4653 29.3574 43.2533C37.9814 40.3747 44.1987 32.24 44.1987 22.6467C44.1987 10.6507 34.4733 0.926671 22.4773 0.926671"
                          fill="white"
                        ></path>
                      </svg>
                      View source
                    </Button>
                    <Button className="gap-2 border-[1px] border-[#2F2F2F] bg-[#131313] text-white hover:border-[#1f1f1f] hover:!bg-[#2F2F2F]">
                      <svg
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        className="h-4 w-4"
                      >
                        <path
                          d="M18.25 15.25V5.75H8.75M6 18L17.6002 6.39983"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="square"
                        ></path>
                      </svg>
                      Try demo
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </CardContent>
          </Card>
          <Card className="w-full border-[#2f2f2f] bg-[#131313]">
            <CardHeader>
              <CardTitle className="flex flex-row items-center gap-2 text-sm text-[#666666]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  className={`h-5 w-5`}
                >
                  <path
                    d="M10.75 11H12V16.25M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
                    stroke="currentcolor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  ></path>
                  <path
                    d="M11.5 7.375H11.375V7.5V8.5V8.625H11.5H12.5H12.625V8.5V7.5V7.375H12.5H11.5Z"
                    fill="currentcolor"
                    stroke="currentcolor"
                    strokeWidth="0.25"
                  ></path>
                </svg>
                <p>The graphs and charts below will be visible once your project has collected enough data.</p>
              </CardTitle>
            </CardHeader>
          </Card>
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {map(listListConnection, (item: TypeListConnection) => (
              <Card key={item.title} className="w-full">
                <CardHeader>
                  <CardTitle className="flex flex-row items-center justify-between gap-2 text-sm text-[#666666]">
                    <p>{item.title}</p>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <CircleAlert width={16} height={16} />
                      </TooltipTrigger>
                      <TooltipContent side="right">{item.tooltip}</TooltipContent>
                    </Tooltip>
                  </CardTitle>
                  <CardDescription className="max-w-lg text-balance leading-relaxed">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between border-b-[1px]">
              Bandwidth
              <CircleAlert width={16} height={16} />
            </CardHeader>
            <CardContent className="flex w-full flex-col-reverse items-center justify-between gap-4 pt-6 lg:flex-row">
              <div className="flex w-full lg:w-2/3">Chart</div>
              <div className="flex w-full flex-col gap-4 md:flex-row lg:w-1/3 lg:flex-col">
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle className="flex flex-row items-center justify-between gap-2 text-sm uppercase text-[#666666]">
                      OVERALL UPSTREAM
                    </CardTitle>
                    <CardDescription className="flex max-w-lg flex-row items-end text-balance leading-relaxed">
                      <span className="text-xl text-[#59a08c]">0</span>
                      <span className="mb-[2px] text-sm uppercase text-[#59a08c]">MB</span>
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle className="flex flex-row items-center justify-between gap-2 text-sm uppercase text-[#666666]">
                      OVERALL DOWNSTREAM
                    </CardTitle>
                    <CardDescription className="flex max-w-lg flex-row items-end text-balance leading-relaxed">
                      <span className="text-xl text-[#59a08c]">0</span>
                      <span className="mb-[2px] text-sm uppercase text-[#59a08c]">MB</span>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between border-b-[1px]">
              Users
              <CircleAlert width={16} height={16} />
            </CardHeader>
            <CardContent className="flex w-full flex-col-reverse items-center justify-between gap-4 pt-6 lg:flex-row">
              <div className="flex w-full lg:w-2/3">Chart</div>
              <div className="flex w-full flex-col gap-4 lg:w-1/3">
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle className="flex flex-row items-center justify-between gap-2 text-sm text-[#666666]">
                      TOP COUNTRIES
                    </CardTitle>
                  </CardHeader>
                </Card>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between border-b-[1px]">
              Rooms
              <CircleAlert width={16} height={16} />
            </CardHeader>
            <CardContent className="flex w-full flex-col items-center justify-between gap-4 pt-6 lg:flex-row">
              <div className="flex w-full flex-col gap-4 md:flex-row lg:w-1/3 lg:flex-col">
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle className="flex flex-row items-center justify-between gap-2 text-sm text-[#666666]">
                      AVERAGE ROOM SIZE
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="w-ful flex items-end justify-between gap-8">
                    <span className="text-4xl">0</span>
                    <div className="mb-1 w-1/2 border-b-[2px] border-dashed border-[#59a08c]"></div>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle className="flex flex-row items-center justify-between gap-2 text-sm text-[#666666]">
                      AVERAGE ROOM DURATION
                    </CardTitle>
                  </CardHeader>
                </Card>
              </div>
              <div className="flex w-full lg:w-2/3">Chart</div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between border-b-[1px]">
              Egress
              <CircleAlert width={16} height={16} />
            </CardHeader>
            <CardContent className="flex w-full flex-col items-center justify-between gap-4 pt-6 lg:flex-row">
              <div className="flex w-full flex-col gap-4 md:flex-row lg:w-1/3 lg:flex-col">
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle className="flex flex-row items-center justify-between gap-2 text-sm text-[#666666]">
                      TOTAL EGRESS COUNT
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="w-ful flex items-end justify-between gap-8">
                    <span className="text-4xl">0</span>
                    <div className="mb-1 w-1/2 border-b-[2px] border-dashed border-[#59a08c]"></div>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle className="flex flex-row items-center justify-between gap-2 text-sm text-[#666666]">
                      TOTAL EGRESS DURATION
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="w-ful flex items-end justify-between gap-8">
                    <span className="text-4xl"></span>
                    <div className="mb-1 w-1/2 border-b-[2px] border-dashed border-[#59a08c]"></div>
                  </CardContent>
                </Card>
              </div>
              <div className="flex w-full lg:w-2/3">Chart</div>
            </CardContent>
          </Card>
        </main>
      </div>
    </Layout>
  )
}
