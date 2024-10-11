'use client'

import { Bandwidth, Connection, Sample } from './sections'
import { CircleAlert } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Layout } from '@/layouts'

export const Analytics = () => {
  return (
    <Layout>
      <div className="grid gap-4">
        <div className="grid gap-4">
          <p className="text-xl font-semibold">Get Started</p>
          <Sample />
        </div>
        <Connection />
        <Bandwidth />
        <div className="flex flex-col items-start gap-4 sm:py-0 md:gap-8">
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
        </div>
      </div>
    </Layout>
  )
}
