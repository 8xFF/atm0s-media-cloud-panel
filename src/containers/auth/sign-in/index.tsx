'use client'

import { Button } from '@/components'
import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react'
import { signIn } from 'next-auth/react'

const CALLBACK_URL = '/loading'

export const SignIn = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center md:flex lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="flex justify-center">
            <img src="/logo.svg" alt="" className="w-24 rounded border" />
          </div>
          <div className="h-[1px] w-full bg-divide" />
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">Login or register with the options below</p>
          </div>
          <div className="grid gap-4">
            <Button
              onClick={() => signIn('github', { callbackUrl: CALLBACK_URL })}
              variant="outline"
              className="relative w-full"
            >
              <IconBrandGithub size={24} />
              <span>Continue with Github</span>
            </Button>
            <Button
              onClick={() => signIn('google', { callbackUrl: CALLBACK_URL })}
              variant="outline"
              className="relative w-full"
            >
              <IconBrandGoogle size={24} />
              <span>Continue with Google</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img src="/sign-in-bg.jpg" alt="" className="h-screen w-full object-cover" />
      </div>
    </div>
  )
}
