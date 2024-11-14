import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

const chartData = [
  { date: '2024-04-01', user: 222 },
  { date: '2024-04-02', user: 97 },
  { date: '2024-04-03', user: 167 },
  { date: '2024-04-04', user: 242 },
  { date: '2024-04-05', user: 373 },
  { date: '2024-04-06', user: 301 },
  { date: '2024-04-07', user: 245 },
  { date: '2024-04-08', user: 409 },
  { date: '2024-04-09', user: 59 },
  { date: '2024-04-10', user: 261 },
  { date: '2024-04-11', user: 327 },
  { date: '2024-04-12', user: 292 },
  { date: '2024-04-13', user: 342 },
  { date: '2024-04-14', user: 137 },
  { date: '2024-04-15', user: 120 },
  { date: '2024-04-16', user: 138 },
  { date: '2024-04-17', user: 446 },
  { date: '2024-04-18', user: 364 },
  { date: '2024-04-19', user: 243 },
  { date: '2024-04-20', user: 89 },
  { date: '2024-04-21', user: 137 },
  { date: '2024-04-22', user: 224 },
  { date: '2024-04-23', user: 138 },
  { date: '2024-04-24', user: 387 },
  { date: '2024-04-25', user: 215 },
  { date: '2024-04-26', user: 75 },
  { date: '2024-04-27', user: 383 },
  { date: '2024-04-28', user: 122 },
  { date: '2024-04-29', user: 315 },
  { date: '2024-04-30', user: 454 },
]

const chartConfig = {
  views: {
    label: 'Users',
  },
  user: {
    label: 'user',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig

type Props = {}

export const SectionsUser: React.FC<Props> = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Users</CardTitle>
      </CardHeader>
      <CardContent>
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
            <Bar dataKey="user" fill={`var(--color-user`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
