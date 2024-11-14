import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Layout } from '@/layouts'
import dayjs from 'dayjs'
import { map } from 'lodash'
import { Check, CircleAlert, MoreHorizontal } from 'lucide-react'
import { listPlan } from './const'

export const ProjectsBilling = () => {
  const amount1 = 100
  const costPlan1 = 1000
  const renderButton = (type: number | 'custom' | 'free') => {
    if (type === 'custom') {
      return (
        <Button className="gap-2 border-[1px] border-[#2F2F2F] bg-[#131313] uppercase text-white hover:border-[#1f1f1f] hover:!bg-[#2F2F2F]">
          Contact us
        </Button>
      )
    } else if (type === 'free') {
      return <span className="uppercase text-[#666666]">Current Plan</span>
    } else {
      return (
        <Button className="gap-2 border-[1px] border-[#2F2F2F] bg-[#131313] uppercase text-[#59a08c] hover:border-[#1f1f1f] hover:!bg-[#2F2F2F]">
          Select plan
        </Button>
      )
    }
  }
  const renderPrice = (type: number | 'custom' | 'free') => {
    if (type === 'custom') {
      return <span className="text-xl text-[#59a08c]">Custom</span>
    } else if (type === 'free') {
      return (
        <div className="flex flex-col">
          <span className="text-xl text-[#59a08c]">Free</span>
          <span className="text-sm text-[#666666]">No credit card required</span>
        </div>
      )
    } else {
      return (
        <div className="flex flex-col">
          <span className="text-sm text-[#666666]">Starting at</span>
          <span className="text-xl text-[#59a08c]">${type}/mo</span>
        </div>
      )
    }
  }
  return (
    <Layout>
      <div className="flex min-h-screen w-full flex-col">
        <main className="flex flex-col items-start gap-4 md:gap-8">
          <div className="flex w-full flex-col items-center gap-4 md:flex-row">
            <Card className="w-full">
              <CardHeader className="">
                <CardTitle className="flex flex-row items-center justify-between gap-2">
                  <span className="text-sm uppercase text-[#666666]">BANDWIDTH TODAY</span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <CircleAlert width={16} height={16} />
                    </TooltipTrigger>
                    <TooltipContent side="right">Total bandwidth</TooltipContent>
                  </Tooltip>
                </CardTitle>
                <CardDescription className="flex max-w-lg flex-row items-end text-balance leading-relaxed">
                  <span className="text-2xl text-[#59a08c]">0</span>
                  <span className="mb-[2px] text-sm uppercase text-[#59a08c]">MB</span>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="w-full">
              <CardHeader className="">
                <CardTitle className="flex flex-row items-center justify-between gap-2">
                  <span className="text-sm uppercase text-[#666666]">BANDWIDTH IN {dayjs().format('MMMM')}</span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <CircleAlert width={16} height={16} />
                    </TooltipTrigger>
                    <TooltipContent side="right">Total bandwidth used thit month</TooltipContent>
                  </Tooltip>
                </CardTitle>
                <CardDescription className="flex max-w-lg flex-row items-end text-balance leading-relaxed">
                  <span className="text-2xl text-[#59a08c]">0</span>
                  <span className="mb-[2px] text-sm uppercase text-[#59a08c]">GB</span>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="w-full">
              <CardHeader className="">
                <CardTitle className="flex flex-row items-center justify-between gap-2">
                  <span className="text-sm uppercase text-[#666666]">NEXT INVOICE</span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <CircleAlert width={16} height={16} />
                    </TooltipTrigger>
                    <TooltipContent side="right">Amount currently on your bill for your next invoice</TooltipContent>
                  </Tooltip>
                </CardTitle>
                <CardDescription className="flex max-w-lg flex-row items-end text-balance leading-relaxed">
                  <span className="text-2xl text-[#59a08c]">$</span>
                  <span className="text-2xl text-[#59a08c]"> 0</span>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <Card className="w-full">
            <CardHeader className="border-b-[1px]">
              <CardTitle className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                <span className="font-sans text-base uppercase md:text-lg">Current plan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex h-full w-2/3 flex-wrap items-center gap-4 md:flex-nowrap">
                  <div className="flex h-full w-full flex-col border-r-[0.5px] border-none border-[#666666] md:border-solid">
                    <span className="text-sm uppercase">Name:</span>
                    <span className="text-xs text-[#666666]">Build</span>
                  </div>
                  <div className="flex h-full w-full flex-col border-r-[0.5px] border-none border-[#666666] md:border-solid">
                    <span className="text-sm uppercase">DESCRIPTION:</span>
                    <span className="text-xs text-[#666666]">Everything you need to start a realtime project</span>
                  </div>
                  <div className="flex w-full flex-col">
                    <span className="text-sm uppercase">NEXT BILLING CYCLE:</span>
                    <span className="text-xs text-[#666666]">10/1/2024</span>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="uppercase text-[#59a08c]">
                      Upgrade
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="left-0 top-0 flex !h-svh !w-screen translate-x-0 translate-y-0 flex-col items-center justify-center overflow-y-scroll pb-10 pt-20 md:left-[50%] md:top-[50%] md:!h-fit md:max-w-[90%] md:translate-x-[-50%] md:translate-y-[-50%] md:pb-0 md:pt-0">
                    <span className="flex text-5xl font-semibold">Choose a plan</span>
                    <p className="text-center text-[#666666]">
                      For more detailed information on our plans and pricing,{' '}
                      <span className="!text-[#59a08c]">visit our pricing page</span>.
                    </p>
                    <div className="flex h-full w-full flex-col items-center gap-4 md:flex-row">
                      {map(listPlan, (item, index) => (
                        <Card key={item.title} className="flex w-full flex-col justify-between">
                          <CardContent className="flex flex-col pt-6">
                            <div className="flex flex-col gap-2 border-b-[1px] pb-4">
                              <span className="text-xl font-semibold">{item.title}</span>
                              <span className="text-md text-[#666666]">{item.description}</span>
                            </div>
                            <div className="border-b-[1px] py-4">{renderPrice(item.price)}</div>
                            <div className="flex flex-col border-b-[1px] py-4">
                              {item.price === 'free' ? (
                                <span className="mb-2 text-sm font-semibold text-[#666666]">Start with:</span>
                              ) : (
                                <span className="mb-2 text-sm font-semibold text-[#666666]">
                                  Everything from {listPlan[index - 1].title}, plus:
                                </span>
                              )}
                              {map(item.listExtension, (extension) => (
                                <div key={extension} className="flex items-start gap-2">
                                  <Check width={4} hanging={4} className="min-w-4" />
                                  {extension}
                                </div>
                              ))}
                            </div>
                            <div className="flex w-full justify-center pt-4">{renderButton(item.price)}</div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader className="border-b-[1px]">
              <CardTitle className="flex flex-row items-center justify-between gap-2">
                <span className="font-sans text-base uppercase md:text-lg">{dayjs().format('MMMM')} Usage</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex w-full flex-col pt-6">
              <div className="flex flex-col border-b-[1px] pb-2">
                <div className="flex items-center">
                  <div className="text-md w-1/3 uppercase md:w-4/6">DESCRIPTION</div>
                  <div className="text-md flex w-1/3 justify-end uppercase md:w-1/3 md:justify-start">AMOUNT</div>
                  <div className="text-md flex w-1/3 justify-end uppercase md:w-1/3">COST</div>
                </div>
                <div className="my-2 flex items-center text-[#666666]">
                  <div className="w-1/3 md:w-4/6">Build: Incl. 50GB of bandwidth</div>
                  <div className="flex w-1/3 justify-end md:w-1/3 md:justify-start">{amount1}GB</div>
                  <div className="flex w-1/3 justify-end md:w-1/3">${costPlan1}</div>
                </div>
                <div className="flex items-center text-[#666666]">
                  <div className="w-1/3 md:w-4/6">Build: Additional bandwidth ($0.00 per GB)</div>
                  <div className="flex w-1/3 justify-end md:w-1/3 md:justify-start">{amount1}GB</div>
                  <div className="flex w-1/3 justify-end md:w-1/3">${costPlan1}</div>
                </div>
              </div>
              <div className="flex items-center pt-2">
                <div className="w-1/3 md:w-4/6"></div>
                <div className="flex w-1/3 justify-end uppercase md:w-1/3 md:justify-start">Total</div>
                <div className="flex w-1/3 justify-end md:w-1/3">${costPlan1 + costPlan1}</div>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader className="border-b-[1px]">
              <CardTitle className="flex flex-row items-center justify-between gap-2">
                <span className="font-sans text-base uppercase md:text-lg">Statements</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>{`Customize "Invoice to:" field`}</DropdownMenuLabel>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex w-full flex-col items-center justify-center pt-6">
              <span className="italic text-[#666666]">
                No statements available. Statements become available after a payment has been processed.
              </span>
            </CardContent>
          </Card>
        </main>
      </div>
    </Layout>
  )
}
