'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'

type Props = {}

export const SectionsRooms: React.FC<Props> = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Rooms</CardTitle>
      </CardHeader>
      <CardContent className="px-2 sm:p-6"></CardContent>
    </Card>
  )
}
