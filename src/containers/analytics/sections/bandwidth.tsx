'use client'

import * as React from 'react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

export const description = 'An interactive bar chart'

const chartData = [
  { date: '2024-04-01', bandwidth: 222 },
  { date: '2024-04-02', bandwidth: 97 },
  { date: '2024-04-03', bandwidth: 167 },
  { date: '2024-04-04', bandwidth: 242 },
  { date: '2024-04-05', bandwidth: 373 },
  { date: '2024-04-06', bandwidth: 301 },
  { date: '2024-04-07', bandwidth: 245 },
  { date: '2024-04-08', bandwidth: 409 },
  { date: '2024-04-09', bandwidth: 59 },
  { date: '2024-04-10', bandwidth: 261 },
  { date: '2024-04-11', bandwidth: 327 },
  { date: '2024-04-12', bandwidth: 292 },
  { date: '2024-04-13', bandwidth: 342 },
  { date: '2024-04-14', bandwidth: 137 },
  { date: '2024-04-15', bandwidth: 120 },
  { date: '2024-04-16', bandwidth: 138 },
  { date: '2024-04-17', bandwidth: 446 },
  { date: '2024-04-18', bandwidth: 364 },
  { date: '2024-04-19', bandwidth: 243 },
  { date: '2024-04-20', bandwidth: 89 },
  { date: '2024-04-21', bandwidth: 137 },
  { date: '2024-04-22', bandwidth: 224 },
  { date: '2024-04-23', bandwidth: 138 },
  { date: '2024-04-24', bandwidth: 387 },
  { date: '2024-04-25', bandwidth: 215 },
  { date: '2024-04-26', bandwidth: 75 },
  { date: '2024-04-27', bandwidth: 383 },
  { date: '2024-04-28', bandwidth: 122 },
  { date: '2024-04-29', bandwidth: 315 },
  { date: '2024-04-30', bandwidth: 454 },
  { date: '2024-05-01', bandwidth: 165 },
  { date: '2024-05-02', bandwidth: 293 },
  { date: '2024-05-03', bandwidth: 247 },
  { date: '2024-05-04', bandwidth: 385 },
  { date: '2024-05-05', bandwidth: 481 },
  { date: '2024-05-06', bandwidth: 498 },
  { date: '2024-05-07', bandwidth: 388 },
  { date: '2024-05-08', bandwidth: 149 },
  { date: '2024-05-09', bandwidth: 227 },
  { date: '2024-05-10', bandwidth: 293 },
  { date: '2024-05-11', bandwidth: 335 },
  { date: '2024-05-12', bandwidth: 197 },
  { date: '2024-05-13', bandwidth: 197 },
  { date: '2024-05-14', bandwidth: 448 },
  { date: '2024-05-15', bandwidth: 473 },
  { date: '2024-05-16', bandwidth: 338 },
  { date: '2024-05-17', bandwidth: 499 },
  { date: '2024-05-18', bandwidth: 315 },
  { date: '2024-05-19', bandwidth: 235 },
  { date: '2024-05-20', bandwidth: 177 },
  { date: '2024-05-21', bandwidth: 82 },
  { date: '2024-05-22', bandwidth: 81 },
  { date: '2024-05-23', bandwidth: 252 },
  { date: '2024-05-24', bandwidth: 294 },
  { date: '2024-05-25', bandwidth: 201 },
  { date: '2024-05-26', bandwidth: 213 },
  { date: '2024-05-27', bandwidth: 420 },
  { date: '2024-05-28', bandwidth: 233 },
  { date: '2024-05-29', bandwidth: 78 },
  { date: '2024-05-30', bandwidth: 340 },
  { date: '2024-05-31', bandwidth: 178 },
  { date: '2024-06-01', bandwidth: 178 },
  { date: '2024-06-02', bandwidth: 470 },
  { date: '2024-06-03', bandwidth: 103 },
  { date: '2024-06-04', bandwidth: 439 },
  { date: '2024-06-05', bandwidth: 88 },
  { date: '2024-06-06', bandwidth: 294 },
  { date: '2024-06-07', bandwidth: 323 },
  { date: '2024-06-08', bandwidth: 385 },
  { date: '2024-06-09', bandwidth: 438 },
  { date: '2024-06-10', bandwidth: 155 },
  { date: '2024-06-11', bandwidth: 92 },
  { date: '2024-06-12', bandwidth: 492 },
  { date: '2024-06-13', bandwidth: 81 },
  { date: '2024-06-14', bandwidth: 426 },
  { date: '2024-06-15', bandwidth: 307 },
  { date: '2024-06-16', bandwidth: 371 },
  { date: '2024-06-17', bandwidth: 475 },
  { date: '2024-06-18', bandwidth: 107 },
  { date: '2024-06-19', bandwidth: 341 },
  { date: '2024-06-20', bandwidth: 408 },
  { date: '2024-06-21', bandwidth: 169 },
  { date: '2024-06-22', bandwidth: 317 },
  { date: '2024-06-23', bandwidth: 480 },
  { date: '2024-06-24', bandwidth: 132 },
  { date: '2024-06-25', bandwidth: 141 },
  { date: '2024-06-26', bandwidth: 434 },
  { date: '2024-06-27', bandwidth: 448 },
  { date: '2024-06-28', bandwidth: 149 },
  { date: '2024-06-29', bandwidth: 103 },
  { date: '2024-06-30', bandwidth: 446 },
]

const chartConfig = {
  views: {
    label: 'Bandwidth',
  },
  bandwidth: {
    label: 'Bandwidth',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig

export const Bandwidth = () => {
  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Bandwidth</CardTitle>
          <CardDescription>Showing total bandwidth for the last 3 months</CardDescription>
        </div>
        <div className="flex">
          <button className="relative flex flex-1 cursor-default flex-col justify-center gap-1 border-t bg-muted/50 px-6 py-4 text-left even:border-l sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
            <span className="whitespace-nowrap text-xs text-muted-foreground">Overall Upstream</span>
            <span className="text-lg font-bold leading-none sm:text-3xl">0MB</span>
          </button>
          <button className="relative flex flex-1 cursor-default flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
            <span className="whitespace-nowrap text-xs text-muted-foreground">Overall Downstream</span>
            <span className="text-lg font-bold leading-none sm:text-3xl">0MB</span>
          </button>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })
                  }}
                />
              }
            />
            <Bar dataKey="bandwidth" fill="var(--color-bandwidth)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
