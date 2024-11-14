import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type Props = {}

export const SectionsRooms: React.FC<Props> = () => {
  return (
    <Card className="h-full shadow-sm">
      <CardHeader>
        <CardTitle>Rooms</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  )
}
