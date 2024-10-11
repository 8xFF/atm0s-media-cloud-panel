'use client'

import { MoreHorizontal, Search } from 'lucide-react'
import Image from 'next/image'
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components'
import { Layout } from '@/layouts'

export const Sessions = () => {
  return (
    <Layout>
      <div className="flex min-h-screen w-full flex-col">
        <p className="mb-4 text-3xl font-semibold text-white">My first app</p>
        <main className="flex flex-col items-start gap-4 md:gap-8">
          <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
            <Card className="w-full sm:col-span-2" x-chunk="dashboard-05-chunk-0">
              <CardHeader className="pb-3">
                <CardTitle className="uppercase text-[#ffffff66]">ACTIVE PARTICIPANTS</CardTitle>
                <CardDescription className="max-w-lg text-balance text-lg leading-relaxed text-[#59a08c]">0</CardDescription>
              </CardHeader>
            </Card>
            <Card className="w-full sm:col-span-2" x-chunk="dashboard-05-chunk-0">
              <CardHeader className="pb-3">
                <CardTitle className="uppercase text-[#ffffff66]">ACTIVE ROOMS</CardTitle>
                <CardDescription className="max-w-lg text-balance text-lg leading-relaxed text-[#59a08c]">0</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <Card className="w-full sm:col-span-2" x-chunk="dashboard-05-chunk-0">
            <CardHeader className="border-b-[1px]">
              <CardTitle className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                <span className="text-base font-semibold uppercase md:text-xl">Active Sessions</span>
                <div className="relative w-full md:w-[336px]">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-lg bg-background pr-8 md:w-[336px]"
                  />
                  <Search
                    onClick={() => {}}
                    className="absolute right-2.5 top-2.5 h-4 w-4 cursor-pointer text-muted-foreground"
                  />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center pt-6">
              <span className="italic">No active sessions</span>
            </CardContent>
          </Card>
          <Card className="w-full sm:col-span-2" x-chunk="dashboard-05-chunk-0">
            <CardHeader className="border-b-[1px]">
              <CardTitle className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                <span className="text-base font-semibold uppercase md:text-xl">Closed Sessions</span>
                <div className="relative w-full md:w-[336px]">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-lg bg-background pr-8 md:w-[336px]"
                  />
                  <Search
                    onClick={() => {}}
                    className="absolute right-2.5 top-2.5 h-4 w-4 cursor-pointer text-muted-foreground"
                  />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center pt-6">
              {/* <span className="italic">No active sessions</span> */}
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden md:table-cell">Price</TableHead>
                    <TableHead className="hidden md:table-cell">Total Sales</TableHead>
                    <TableHead className="hidden md:table-cell">Created at</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="hidden sm:table-cell">
                      <Image
                        alt="Product image"
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src="/placeholder.svg"
                        width="64"
                      />
                    </TableCell>
                    <TableCell className="font-medium">Laser Lemonade Machine</TableCell>
                    <TableCell>
                      <Badge variant="outline">Draft</Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">$499.99</TableCell>
                    <TableCell className="hidden md:table-cell">25</TableCell>
                    <TableCell className="hidden md:table-cell">2023-07-12 10:42 AM</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="hidden sm:table-cell">
                      <Image
                        alt="Product image"
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src="/placeholder.svg"
                        width="64"
                      />
                    </TableCell>
                    <TableCell className="font-medium">Hypernova Headphones</TableCell>
                    <TableCell>
                      <Badge variant="outline">Active</Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">$129.99</TableCell>
                    <TableCell className="hidden md:table-cell">100</TableCell>
                    <TableCell className="hidden md:table-cell">2023-10-18 03:21 PM</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </Layout>
  )
}
