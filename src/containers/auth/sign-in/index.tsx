import { Button } from '@/components/ui'

export const description =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image."

export const SignIn = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center md:flex lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex flex-col items-center justify-center gap-10 py-12">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <img src="/logo.svg" alt="" className="w-[100px] rounded border" />
          <p className="text-balance text-center text-white text-muted-foreground">
            A cloud-managed global media network built on LiveKit&apos;s open source WebRTC stack.
          </p>
        </div>
        <div
          className="h-[1px] w-full"
          style={{
            background: 'linear-gradient(270deg, rgba(37, 37, 37, 0) 0%, rgb(37, 37, 37) 50%, rgba(37, 37, 37, 0) 100%)',
          }}
        ></div>
        <div className="mx-auto grid items-center justify-center gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="flex justify-center gap-2 text-3xl font-bold">
              Continue to <p className="text-[#59a08c]">8xFF</p>
            </h1>
            <p className="text-balance text-muted-foreground">Login or register with the options below</p>
          </div>
          <div className="grid gap-4 w-full md:w-[350px]">
            <Button
              type="submit"
              variant="outline"
              className="w-full rounded-sm border-[1px] border-[#59a08c] bg-transparent text-[#bdd7cf]"
            >
              Continue with Google
            </Button>
            <Button
              type="submit"
              variant="outline"
              className="w-full rounded-sm border-[1px] border-[#59a08c] bg-transparent text-[#bdd7cf]"
            >
              Continue with GitHub
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-sm border-[1px] border-[#59a08c] bg-transparent text-[#bdd7cf]"
            >
              Continue with GitLab
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img src="/sign-in-bg.jpg" alt="" width="1920" height="1080" className="h-full w-full object-cover" />
      </div>
    </div>
  )
}
