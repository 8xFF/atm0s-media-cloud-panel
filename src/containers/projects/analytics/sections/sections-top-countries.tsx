import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type Props = {}

export const SectionsTopCountries: React.FC<Props> = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Top countries</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  )
}
