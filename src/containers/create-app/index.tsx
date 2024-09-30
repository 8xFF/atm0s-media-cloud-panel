'use client'

import { Button } from '@/components'
import { Input } from '@/components/ui/input'

export const CreateApp = () => {
  return (
    <div className="flex h-screen items-center justify-center p-4 md:m-auto">
      <div className="flex max-w-[384px] flex-col items-center justify-center gap-8">
        <img src="/logo.svg" alt="" className="w-[100px] rounded border" />
        <div
          className="h-[1px] w-full"
          style={{
            background: 'linear-gradient(270deg, rgba(37, 37, 37, 0) 0%, rgb(37, 37, 37) 50%, rgba(37, 37, 37, 0) 100%)',
          }}
        ></div>
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="text-balance text-center text-2xl text-white">Create your first app</p>
          <p className="text-center text-sm text-[#e3e1e1]">
            You will be brought to your project dashboard after creating your application.
          </p>
          <div className="flex w-full flex-col justify-start">
            <p className="mb-2 text-xs uppercase text-white">app name</p>

            <Input placeholder="App name" className="border-transparent focus-visible:ring-transparent" />
            <div className="mb-4 border-[0.5px]"></div>
            <Button type="submit" variant="outline" className="w-full rounded-sm bg-[#59a08c] text-white">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
