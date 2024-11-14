import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { map } from 'lodash'

type Props = {}

const CONNECTION = [
  {
    title: 'Connection Success',
    description: 'No data for this time range',
    tooltip: '',
  },
  {
    title: 'Client SDKS',
    description: 'No data for this time range',
    tooltip: '',
  },
  {
    title: 'Connection Types',
    description: 'No data for this time range',
    tooltip: '',
  },
]

export const SectionsConnection: React.FC<Props> = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {map(CONNECTION, (item) => (
        <Card key={item.title} className="w-full shadow-sm">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center justify-between">
                <p>{item.title}</p>
              </div>
            </CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}
