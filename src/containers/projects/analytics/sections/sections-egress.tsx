import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type Props = {}

export const SectionsEgress: React.FC<Props> = () => {
  return (
    <Card className="h-full shadow-sm">
      <CardHeader>
        <CardTitle>Egress</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  )
}
