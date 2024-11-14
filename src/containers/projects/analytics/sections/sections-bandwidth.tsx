import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { useMemo, useState } from 'react'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'

const chartData = [
  { date: '2024-04-01', upstream: 222, downstream: 150 },
  { date: '2024-04-02', upstream: 97, downstream: 180 },
  { date: '2024-04-03', upstream: 167, downstream: 120 },
  { date: '2024-04-04', upstream: 242, downstream: 260 },
  { date: '2024-04-05', upstream: 373, downstream: 290 },
  { date: '2024-04-06', upstream: 301, downstream: 340 },
  { date: '2024-04-07', upstream: 245, downstream: 180 },
  { date: '2024-04-08', upstream: 409, downstream: 320 },
  { date: '2024-04-09', upstream: 59, downstream: 110 },
  { date: '2024-04-10', upstream: 261, downstream: 190 },
  { date: '2024-04-11', upstream: 327, downstream: 350 },
  { date: '2024-04-12', upstream: 292, downstream: 210 },
  { date: '2024-04-13', upstream: 342, downstream: 380 },
  { date: '2024-04-14', upstream: 137, downstream: 220 },
  { date: '2024-04-15', upstream: 120, downstream: 170 },
  { date: '2024-04-16', upstream: 138, downstream: 190 },
  { date: '2024-04-17', upstream: 446, downstream: 360 },
  { date: '2024-04-18', upstream: 364, downstream: 410 },
  { date: '2024-04-19', upstream: 243, downstream: 180 },
  { date: '2024-04-20', upstream: 89, downstream: 150 },
  { date: '2024-04-21', upstream: 137, downstream: 200 },
  { date: '2024-04-22', upstream: 224, downstream: 170 },
  { date: '2024-04-23', upstream: 138, downstream: 230 },
  { date: '2024-04-24', upstream: 387, downstream: 290 },
  { date: '2024-04-25', upstream: 215, downstream: 250 },
  { date: '2024-04-26', upstream: 75, downstream: 130 },
  { date: '2024-04-27', upstream: 383, downstream: 420 },
  { date: '2024-04-28', upstream: 122, downstream: 180 },
  { date: '2024-04-29', upstream: 315, downstream: 240 },
  { date: '2024-04-30', upstream: 454, downstream: 380 },
  { date: '2024-05-01', upstream: 165, downstream: 220 },
  { date: '2024-05-02', upstream: 293, downstream: 310 },
  { date: '2024-05-03', upstream: 247, downstream: 190 },
  { date: '2024-05-04', upstream: 385, downstream: 420 },
  { date: '2024-05-05', upstream: 481, downstream: 390 },
  { date: '2024-05-06', upstream: 498, downstream: 520 },
  { date: '2024-05-07', upstream: 388, downstream: 300 },
  { date: '2024-05-08', upstream: 149, downstream: 210 },
  { date: '2024-05-09', upstream: 227, downstream: 180 },
  { date: '2024-05-10', upstream: 293, downstream: 330 },
  { date: '2024-05-11', upstream: 335, downstream: 270 },
  { date: '2024-05-12', upstream: 197, downstream: 240 },
  { date: '2024-05-13', upstream: 197, downstream: 160 },
  { date: '2024-05-14', upstream: 448, downstream: 490 },
  { date: '2024-05-15', upstream: 473, downstream: 380 },
  { date: '2024-05-16', upstream: 338, downstream: 400 },
  { date: '2024-05-17', upstream: 499, downstream: 420 },
  { date: '2024-05-18', upstream: 315, downstream: 350 },
  { date: '2024-05-19', upstream: 235, downstream: 180 },
  { date: '2024-05-20', upstream: 177, downstream: 230 },
  { date: '2024-05-21', upstream: 82, downstream: 140 },
  { date: '2024-05-22', upstream: 81, downstream: 120 },
  { date: '2024-05-23', upstream: 252, downstream: 290 },
  { date: '2024-05-24', upstream: 294, downstream: 220 },
  { date: '2024-05-25', upstream: 201, downstream: 250 },
  { date: '2024-05-26', upstream: 213, downstream: 170 },
  { date: '2024-05-27', upstream: 420, downstream: 460 },
  { date: '2024-05-28', upstream: 233, downstream: 190 },
  { date: '2024-05-29', upstream: 78, downstream: 130 },
  { date: '2024-05-30', upstream: 340, downstream: 280 },
  { date: '2024-05-31', upstream: 178, downstream: 230 },
  { date: '2024-06-01', upstream: 178, downstream: 200 },
  { date: '2024-06-02', upstream: 470, downstream: 410 },
  { date: '2024-06-03', upstream: 103, downstream: 160 },
  { date: '2024-06-04', upstream: 439, downstream: 380 },
  { date: '2024-06-05', upstream: 88, downstream: 140 },
  { date: '2024-06-06', upstream: 294, downstream: 250 },
  { date: '2024-06-07', upstream: 323, downstream: 370 },
  { date: '2024-06-08', upstream: 385, downstream: 320 },
  { date: '2024-06-09', upstream: 438, downstream: 480 },
  { date: '2024-06-10', upstream: 155, downstream: 200 },
  { date: '2024-06-11', upstream: 92, downstream: 150 },
  { date: '2024-06-12', upstream: 492, downstream: 420 },
  { date: '2024-06-13', upstream: 81, downstream: 130 },
  { date: '2024-06-14', upstream: 426, downstream: 380 },
  { date: '2024-06-15', upstream: 307, downstream: 350 },
  { date: '2024-06-16', upstream: 371, downstream: 310 },
  { date: '2024-06-17', upstream: 475, downstream: 520 },
  { date: '2024-06-18', upstream: 107, downstream: 170 },
  { date: '2024-06-19', upstream: 341, downstream: 290 },
  { date: '2024-06-20', upstream: 408, downstream: 450 },
  { date: '2024-06-21', upstream: 169, downstream: 210 },
  { date: '2024-06-22', upstream: 317, downstream: 270 },
  { date: '2024-06-23', upstream: 480, downstream: 530 },
  { date: '2024-06-24', upstream: 132, downstream: 180 },
  { date: '2024-06-25', upstream: 141, downstream: 190 },
  { date: '2024-06-26', upstream: 434, downstream: 380 },
  { date: '2024-06-27', upstream: 448, downstream: 490 },
  { date: '2024-06-28', upstream: 149, downstream: 200 },
  { date: '2024-06-29', upstream: 103, downstream: 160 },
  { date: '2024-06-30', upstream: 446, downstream: 400 },
]

const chartConfig = {
  views: {
    label: 'Bandwidth',
  },
  upstream: {
    label: 'upstream',
    color: 'hsl(var(--chart-1))',
  },
  downstream: {
    label: 'downstream',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig

type Props = {}

export const SectionsBandwidth: React.FC<Props> = () => {
  const [activeChart, setActiveChart] = useState<keyof typeof chartConfig>('upstream')
  const total = useMemo(
    () => ({
      upstream: chartData.reduce((acc, curr) => acc + curr.upstream, 0),
      downstream: chartData.reduce((acc, curr) => acc + curr.downstream, 0),
    }),
    []
  )
  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Bandwidth</CardTitle>
          <CardDescription>Showing total bandwidth for the last 3 months</CardDescription>
        </div>
        <div className="flex">
          {['upstream', 'downstream'].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="whitespace-nowrap text-xs capitalize text-muted-foreground">
                  Overall {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                  <span className="font-light">mb</span>
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <LineChart
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
            <Line dataKey={activeChart} type="monotone" stroke={`var(--color-${activeChart})`} strokeWidth={2} dot={false} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
