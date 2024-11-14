import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { map } from 'lodash'

type Props = {}

const ACTIVE = [
  {
    title: 'Active Participants',
    count: 0,
  },
  {
    title: 'Active Rooms',
    count: 0,
  },
]

export const SectionsActive: React.FC<Props> = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {map(ACTIVE, (item) => (
        <Card key={item.title} className="shadow-sm">
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardFooter className="gap-4">
            <div className="text-4xl font-semibold">{item.count}</div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
