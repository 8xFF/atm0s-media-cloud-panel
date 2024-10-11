'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'

type Props = {}

export const SectionsTotalEgress: React.FC<Props> = () => {
  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Total egress count</CardTitle>
        </CardHeader>
        <CardContent className="px-2 sm:p-6"></CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total egress duration</CardTitle>
        </CardHeader>
        <CardContent className="px-2 sm:p-6"></CardContent>
      </Card>
    </div>
  )
}
