import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type Props = {}

export const SectionsAverageRoom: React.FC<Props> = () => {
  return (
    <div className="grid gap-4">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Average room size</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Average room duration</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  )
}
