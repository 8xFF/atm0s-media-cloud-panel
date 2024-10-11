'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'

type Props = {}

export const SectionsEgress: React.FC<Props> = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Egress</CardTitle>
      </CardHeader>
      <CardContent className="px-2 sm:p-6"></CardContent>
    </Card>
  )
}
