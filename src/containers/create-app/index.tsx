'use client'

import { Button, Input, Label } from '@/components'

export const CreateApp = () => {
  return (
    <div className="flex h-screen items-center justify-center p-4 md:p-0">
      <div className="grid max-w-sm gap-8">
        <div className="flex justify-center">
          <img src="/logo.svg" alt="" className="w-24 rounded border" />
        </div>
        <div className="h-[1px] w-full bg-divide" />
        <div className="grid gap-4">
          <p className="text-balance text-center text-2xl capitalize">Create your first app</p>
          <p className="text-center text-sm text-muted-foreground">
            You will be brought to your project dashboard after creating your application.
          </p>
          <div className="grid w-full gap-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="appName">App Name</Label>
              <Input type="appName" id="appName" placeholder="Enter your app name" />
            </div>
            <Button type="submit" className="w-full rounded-sm">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
