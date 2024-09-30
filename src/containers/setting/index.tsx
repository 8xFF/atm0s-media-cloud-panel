'use client'

import { map } from 'lodash'
import { ArrowDown, ArrowDownUp, ArrowUp, CircleAlert, Copy } from 'lucide-react'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
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
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components'
import { Layout } from '@/layouts'

interface TypeEndpoint {
  name: string
  url: string
  apiKey: string
}
const listEndpoints: TypeEndpoint[] = [
  {
    name: 'test',
    url: ' http://google',
    apiKey: 'AFJhdjcs8dfk',
  },
  {
    name: 'test',
    url: ' http://google',
    apiKey: 'AFJhdjcs8dfk',
  },
  {
    name: 'test',
    url: ' http://google',
    apiKey: 'AFJhdjcs8dfk',
  },
]
interface TypeOption {
  key: number
  name: string
}
const listOptions: TypeOption[] = [
  {
    key: 1,
    name: 'Rooms are automatically created when a participant joins',
  },
  {
    key: 2,
    name: 'Admins can remotely unmute tracks',
  },
  {
    key: 3,
    name: 'Allow pausing videos when subscribers are congested',
  },
  {
    key: 4,
    name: 'Show onboarding instructions on dashboard',
  },
]
const listCodes: TypeOption[] = [
  {
    key: 1,
    name: 'Audio RED (REDundant encoding)',
  },
  {
    key: 2,
    name: 'H.264',
  },
  {
    key: 3,
    name: 'VP8',
  },
  {
    key: 4,
    name: 'VP9',
  },
  {
    key: 5,
    name: 'AV1',
  },
]
export const Setting = () => {
  const copyToClipboard = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Layout breadcrumbs={[]} title="Setting">
      <div className="flex min-h-screen w-full flex-col">
        <main className="flex flex-col items-start gap-4 md:gap-8">
          <Tabs defaultValue="project" className="w-full">
            <TabsList>
              <TabsTrigger value="project">Project</TabsTrigger>
              <TabsTrigger value="keys">Keys</TabsTrigger>
              <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
              {/* <TabsTrigger value="members">Members</TabsTrigger> */}
            </TabsList>
            <TabsContent value="project">
              <div className="flex w-full flex-col-reverse justify-between gap-4 md:flex-row">
                <div className="flex w-full flex-col gap-8 md:w-[70%]">
                  <div className="flex flex-col gap-4">
                    <span className="text-2xl font-semibold text-[#FFFFFFCC]">General</span>
                    <div className="grid w-full gap-2 md:w-1/2">
                      <Label className="font-sans text-sm uppercase text-[#FFFFFFCC]">PROJECT NAME</Label>
                      <Input required value="My first app" />
                    </div>
                    <div className="grid w-full gap-2 md:w-1/2">
                      <div className="flex items-center gap-4">
                        <Label className="font-sans text-sm uppercase text-[#FFFFFFCC]">PROJECT URL</Label>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <CircleAlert width={16} height={16} />
                          </TooltipTrigger>
                          <TooltipContent side="right">To change your url domain</TooltipContent>
                        </Tooltip>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input required value="my-first-app-0u6dm2nk.livekit.cloud" />
                        <Copy
                          width={16}
                          height={16}
                          onClick={() => copyToClipboard('my-first-app-0u6dm2nk.livekit.cloud')}
                        />
                      </div>
                    </div>
                    <div className="grid w-full gap-2 md:w-1/2">
                      <div className="flex items-center gap-4">
                        <Label className="font-sans text-sm uppercase text-[#FFFFFFCC]">SIP URI</Label>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <CircleAlert width={16} height={16} />
                          </TooltipTrigger>
                          <TooltipContent side="right">To change your url domain</TooltipContent>
                        </Tooltip>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input required value="sip:5tjwskjtok5.sip.livekit.cloud" />
                        <Copy width={16} height={16} onClick={() => copyToClipboard('sip:5tjwskjtok5.sip.livekit.cloud')} />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="mb-2 font-sans text-sm uppercase text-[#FFFFFFCC]">OPTIONS</span>
                      <div className="flex flex-col">
                        {map(listOptions, (option) => (
                          <div key={option.name} className="flex items-start gap-2">
                            <input type="checkbox" className="mt-[6px]" />
                            <span className="text-[#FFFFFFCC]">{option.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="mb-2 font-sans text-sm uppercase text-[#FFFFFFCC]">ENABLED CODECS</span>
                      <div className="flex flex-col">
                        {map(listCodes, (code) => (
                          <div key={code.name} className="flex items-start gap-2">
                            <input type="checkbox" className="mt-[6px]" />
                            <span className="text-[#FFFFFFCC]">{code.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                      <span className="mb-2 text-2xl font-semibold text-[#FFFFFFCC]">Connection limits</span>
                      <span className="mb-2 text-sm text-[#FFFFFF99]">
                        To ensure the stability of our network and to prevent abuse, Livekit projects have limitations on the
                        number of concurrent connections. Service may be disrupted when these limits are exceeded.
                      </span>
                      <p className="text-sm text-[#FFFFFF99]">
                        If you anticipate needing more concurrent connections for your project,{' '}
                        <span className="text-[#59a08c]">upgrade to the Scale plan</span>.
                      </p>
                    </div>
                    <div className="flex w-full flex-col rounded-md border-[1px]">
                      <div className="flex w-full border-b-[1px] p-4">
                        <div className="w-[40%] font-semibold uppercase text-[#FFFFFFCC]">Type</div>
                        <div className="w-[20%] font-semibold text-[#FFFFFFCC] md:w-[10%]">Limit</div>
                        <div className="w-[40%] font-semibold text-[#FFFFFFCC] md:w-[50%]">Peak usage(past 7 days)</div>
                      </div>
                      <div className="flex w-full border-b-[1px] p-4">
                        <div className="w-[40%] pr-2 text-[#666666]">Total concurrent participants</div>
                        <div className="w-[20%] text-[#666666] md:w-[10%]">100</div>
                        <div className="w-[40%] text-[#666666] md:w-[50%]">0</div>
                      </div>
                      <div className="flex w-full border-b-[1px] p-4">
                        <div className="w-[40%] pr-2 text-[#666666]">
                          <p>
                            Concurrent <span className="text-[#59a08c]">Egress</span> requests
                          </p>
                        </div>
                        <div className="w-[20%] text-[#666666] md:w-[10%]">2</div>
                        <div className="w-[40%] text-[#666666] md:w-[50%]">0</div>
                      </div>
                      <div className="flex w-full p-4">
                        <div className="w-[40%] pr-2 text-[#666666]">
                          <p>
                            Concurrent <span className="text-[#59a08c]"> Ingress</span> requests
                          </p>
                        </div>
                        <div className="w-[20%] text-[#666666] md:w-[10%]">2</div>
                        <div className="w-[40%] text-[#666666] md:w-[50%]">0</div>
                      </div>
                    </div>
                    <Card className="border-[2px] border-[#FA4C63]">
                      <CardHeader>
                        <CardTitle className="flex flex-row items-center justify-between gap-2">
                          <span className="text-2xl text-[#FA4C63]">Danger Zone</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                        <div className="flex flex-col">
                          <span className="text-[#FFFFFFCC]">Delete this project</span>
                          <span className="text-[#666666]">
                            Once you delete a project, there is no going back. Please be certain.
                          </span>
                        </div>
                        <Button variant="outline" className="bg-[#320108] uppercase text-[#FA4C63]">
                          Delete this project
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <Button variant="outline" className="w-[100px] uppercase text-[#59a08c]">
                  Save
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="keys">
              <Tabs defaultValue="personal-Keys" className="w-full">
                <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                  <TabsList>
                    <TabsTrigger value="personal-Keys">Personal Keys</TabsTrigger>
                    <TabsTrigger value="other-keys">Other Keys</TabsTrigger>
                  </TabsList>
                  <div className=" w-full flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="uppercase text-[#59a08c]">
                          Creat key
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="flex w-[60%] flex-col">
                        <div className="flex w-full flex-col gap-2">
                          <span className="w-full items-start text-2xl font-semibold">New API Key</span>
                          <p className="text-[#666666]">Add a description of the key.</p>
                        </div>
                        <div className="flex w-full flex-col gap-3">
                          <div className="grid gap-2">
                            <Label htmlFor="description">DESCRIPTION</Label>
                            <Input id="description" required placeholder="IOS Client" />
                          </div>
                          <div className="flex w-full items-center justify-center gap-4">
                            <Button variant="outline" className="uppercase">
                              Cancel
                            </Button>
                            <Button variant="outline" className="uppercase text-[#59a08c]">
                              generate
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <div className="flex items-center gap-1 w-full">
                      <div className="w-[120px]">
                        <Select value="description">
                          <SelectTrigger id="category" aria-label="Actions">
                            <SelectValue placeholder="Actions" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="description">Description</SelectItem>
                            <SelectItem value="api-key">API Key</SelectItem>
                            <SelectItem value="owner">Owner</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="w-full md:w-[200px]">
                        <Input type="search" placeholder="Search..." className="w-full rounded-lg bg-background" />
                      </div>
                    </div>
                  </div>
                </div>
                <TabsContent value="personal-Keys">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>
                          <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-2">
                              <span>Description</span> <ArrowDownUp size={16} />
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
                        <TableHead>API Key</TableHead>
                        <TableHead className="hidden md:table-cell">
                          <TableHead>
                            <DropdownMenu>
                              <DropdownMenuTrigger className="flex items-center gap-2">
                                <span>Ower</span> <ArrowDownUp size={16} />
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
                        </TableHead>
                        <TableHead>
                          <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-2">
                              <span>Issued on</span> <ArrowDown size={16} />
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
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">02</TableCell>
                        <TableCell className="font-medium">27-09-2024</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell className="hidden md:table-cell">true</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>
                <TabsContent value="other-keys">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>
                          <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-2">
                              <span>Description</span> <ArrowDownUp size={16} />
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
                        <TableHead>API Key</TableHead>
                        <TableHead className="hidden md:table-cell">
                          <TableHead>
                            <DropdownMenu>
                              <DropdownMenuTrigger className="flex items-center gap-2">
                                <span>Ower</span> <ArrowDownUp size={16} />
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
                        </TableHead>
                        <TableHead>
                          <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-2">
                              <span>Issued on</span> <ArrowDown size={16} />
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
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">02</TableCell>
                        <TableCell className="font-medium">27-09-2024</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell className="hidden md:table-cell">true</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>
            </TabsContent>
            <TabsContent value="webhooks">
              <div className="flex w-full flex-col gap-6 py-6">
                <p className="text-[#666666]">
                  8xFF can be configured to notify your server when room events take place. This can be helpful for your
                  backend to know when a room has finished, or when a participant leaves. For information about how to set up
                  webhooks check out our <span className="text-[#59a08c]">documentation</span>.
                </p>
                <div className="flex w-full flex-col gap-4">
                  {map(listEndpoints, (endpoint) => (
                    <div key={endpoint.apiKey} className="flex w-full items-center justify-between border-b-[1px] pb-2 gap-2">
                      <div className="flex flex-col">
                        <span>{endpoint.name}</span>
                        <span className="text-[#666666] line-clamp-1">
                          {endpoint.url} - signedwith {endpoint.apiKey}
                        </span>
                      </div>
                      <div className="w-fit">
                        <Select>
                          <SelectTrigger id="category" aria-label="Actions">
                            <SelectValue placeholder="Actions" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="send-test-event">Send test event</SelectItem>
                            <SelectItem value="edit-endpoint">
                              <Dialog>
                                <DialogTrigger>Edit endpoint</DialogTrigger>
                                <DialogContent className="flex w-full max-w-[60%] flex-col items-center justify-center overflow-y-scroll">
                                  <div className="flex w-full flex-col gap-2">
                                    <span className="w-full items-start text-2xl font-semibold">New Webhook Endpoint</span>
                                    <p className="text-[#666666]">
                                      Webhooks are triggered after certain events take place. See{' '}
                                      <span className="text-[#59a08c]">webhook docs</span> for a list of events.
                                    </p>
                                  </div>
                                  <div className="flex w-full flex-col gap-3">
                                    <div className="grid gap-2">
                                      <Label htmlFor="name">Name</Label>
                                      <Input id="name" required />
                                    </div>
                                    <div className="grid gap-2">
                                      <Label htmlFor="url">url</Label>
                                      <Input id="url" required />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                      <span className="text-sm uppercase">SIGNING API KEY</span>
                                      <p className="text-xs text-[#666666]">
                                        Webhook requests are signed with your key so you know they come from LiveKit.{' '}
                                        <span className="text-[#59a08c]">Learn more.</span>
                                      </p>
                                      <div className="w-full">
                                        <Select value="test">
                                          <SelectTrigger id="category" aria-label="Actions">
                                            <SelectValue placeholder="Actions" />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectItem value="test">(no name) AFHYD3rfbgf</SelectItem>
                                          </SelectContent>
                                        </Select>
                                      </div>
                                    </div>
                                    <div className="flex w-full items-center justify-center gap-4">
                                      <Button variant="outline" className="uppercase">
                                        Cancel
                                      </Button>
                                      <Button variant="outline" className="uppercase text-[#59a08c]">
                                        Edit
                                      </Button>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </SelectItem>
                            <SelectItem value="delete-endpoint">Delete endpoint</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="uppercase text-[#59a08c]">
                        Add new endpoint
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="flex w-full max-w-[60%] flex-col items-center justify-center overflow-y-scroll">
                      <div className="flex w-full flex-col gap-2">
                        <span className="w-full items-start text-2xl font-semibold">New Webhook Endpoint</span>
                        <p className="text-[#666666]">
                          Webhooks are triggered after certain events take place. See{' '}
                          <span className="text-[#59a08c]">webhook docs</span> for a list of events.
                        </p>
                      </div>
                      <div className="flex w-full flex-col gap-3">
                        <div className="grid gap-2">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" required />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="url">url</Label>
                          <Input id="url" required />
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className="text-sm uppercase">SIGNING API KEY</span>
                          <p className="text-xs text-[#666666]">
                            Webhook requests are signed with your key so you know they come from LiveKit.{' '}
                            <span className="text-[#59a08c]">Learn more.</span>
                          </p>
                          <div className="w-full">
                            <Select value="test">
                              <SelectTrigger id="category" aria-label="Actions">
                                <SelectValue placeholder="Actions" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="test">(no name) AFHYD3rfbgf</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="flex w-full items-center justify-center gap-4">
                          <Button variant="outline" className="uppercase">
                            Cancel
                          </Button>
                          <Button variant="outline" className="uppercase text-[#59a08c]">
                            Create
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </TabsContent>
            {/* <TabsContent value="members"></TabsContent> */}
          </Tabs>
        </main>
      </div>
    </Layout>
  )
}
