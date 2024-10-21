import { Card, CardDescription, CardHeader, CardTitle, Tooltip, TooltipContent, TooltipTrigger } from '@/components'
import { map } from 'lodash'
import { CircleAlertIcon } from 'lucide-react'

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
                <Tooltip>
                  <TooltipTrigger asChild>
                    <CircleAlertIcon size={16} />
                  </TooltipTrigger>
                  <TooltipContent side="right">{item.tooltip}</TooltipContent>
                </Tooltip>
              </div>
            </CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}
