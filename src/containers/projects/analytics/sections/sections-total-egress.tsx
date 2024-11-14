import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type Props = {}

export const SectionsTotalEgress: React.FC<Props> = () => {
  return (
    <div className="grid gap-4">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Total egress count</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Total egress duration</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  )
}
