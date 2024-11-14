import { ImgSignInBg } from '@/assets'
import { SignIn } from '@clerk/clerk-react'

export const AuthSignIn = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center md:flex lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <SignIn />
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img src={ImgSignInBg} alt="" className="h-screen w-full object-cover" />
      </div>
    </div>
  )
}
