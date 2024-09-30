'use client'

import { ArrowDown, ArrowDownUp, ArrowUp } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components'
import { Layout } from '@/layouts'

export const Rooms = () => {
  return (
    <Layout breadcrumbs={[]} title="Rooms">
      <div className="flex min-h-screen w-full flex-col">
        <main className="flex flex-col items-start gap-4 md:gap-8">
          <Tabs defaultValue="egresses" className="w-full">
            <TabsList>
              <TabsTrigger value="egresses">Egresses</TabsTrigger>
              <TabsTrigger value="ingresses">Ingresses</TabsTrigger>
            </TabsList>
            <TabsContent value="egresses">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>
                      <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-2">
                          <span>Started at</span> <ArrowDown size={16} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel className="flex items-center gap-2">
                            <ArrowUp size={16} />
                            <span>Ascending</span>
                          </DropdownMenuLabel>
                          <DropdownMenuItem className="flex items-center gap-2">
                            <ArrowDown size={16} />
                            <span>Descending</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead className="hidden md:table-cell">Status</TableHead>
                    <TableHead className="hidden md:table-cell">Type</TableHead>
                    <TableHead className="hidden md:table-cell">Source</TableHead>
                    <TableHead>Destination</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="hidden sm:table-cell">01</TableCell>
                    <TableCell className="font-medium">27-09-2024</TableCell>
                    <TableCell>30</TableCell>
                    <TableCell className="hidden md:table-cell">true</TableCell>
                    <TableCell className="hidden md:table-cell">1</TableCell>
                    <TableCell className="hidden md:table-cell">8xFF</TableCell>
                    <TableCell>dvfxvf</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="hidden sm:table-cell">02</TableCell>
                    <TableCell className="font-medium">27-09-2024</TableCell>
                    <TableCell>30</TableCell>
                    <TableCell className="hidden md:table-cell">true</TableCell>
                    <TableCell className="hidden md:table-cell">1</TableCell>
                    <TableCell className="hidden md:table-cell">8xFF</TableCell>
                    <TableCell>dvfxvf</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="ingresses">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>
                      <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-2">
                          <span>Started at</span> <ArrowDown size={16} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel className="flex items-center gap-2">
                            <ArrowUp size={16} />
                            <span>Ascending</span>
                          </DropdownMenuLabel>
                          <DropdownMenuItem className="flex items-center gap-2">
                            <ArrowDown size={16} />
                            <span>Descending</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableHead>
                    <TableHead>
                      <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-2">
                          <span>Last active at</span> <ArrowDownUp size={16} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel className="flex items-center gap-2">
                            <ArrowUp size={16} />
                            <span>Ascending</span>
                          </DropdownMenuLabel>
                          <DropdownMenuItem className="flex items-center gap-2">
                            <ArrowDown size={16} />
                            <span>Descending</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableHead>
                    <TableHead className="hidden md:table-cell">Duration</TableHead>
                    <TableHead className="hidden md:table-cell">Status</TableHead>
                    <TableHead className="hidden md:table-cell">Sessions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="hidden sm:table-cell">01</TableCell>
                    <TableCell className="font-medium">27-09-2024</TableCell>
                    <TableCell>22-09-2024</TableCell>
                    <TableCell className="hidden md:table-cell">10</TableCell>
                    <TableCell className="hidden md:table-cell">true</TableCell>
                    <TableCell className="hidden md:table-cell">session 1</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="hidden sm:table-cell">02</TableCell>
                    <TableCell className="font-medium">27-09-2024</TableCell>
                    <TableCell>22-09-2024</TableCell>
                    <TableCell className="hidden md:table-cell">10</TableCell>
                    <TableCell className="hidden md:table-cell">true</TableCell>
                    <TableCell className="hidden md:table-cell">session 1</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </Layout>
  )
}
