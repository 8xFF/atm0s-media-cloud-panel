import { Card, CardContent, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components'

type Props = {}

export const SectionsData: React.FC<Props> = () => {
  return (
    <Card className="h-full shadow-sm">
      <CardContent className="px-2 sm:p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="hidden md:table-cell">Price</TableHead>
              <TableHead className="hidden md:table-cell">Total Sales</TableHead>
              <TableHead className="hidden md:table-cell">Created at</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Hypernova Headphones</TableCell>
              <TableCell className="hidden md:table-cell">$129.99</TableCell>
              <TableCell className="hidden md:table-cell">100</TableCell>
              <TableCell className="hidden md:table-cell">2023-10-18 03:21 PM</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
