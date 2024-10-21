'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'

type Props = {}

export const SectionsTopCountries: React.FC<Props> = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Top countries</CardTitle>
      </CardHeader>
      <CardContent className="px-2 sm:p-6"></CardContent>
    </Card>
  )
}
