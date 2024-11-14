import { env } from '@/config'
import { ClerkProvider } from '@clerk/clerk-react'

type Props = {
  children: React.ReactNode
}

const PUBLISHABLE_KEY = env.CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk publishable key to the .env.local file')
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  return <ClerkProvider publishableKey={PUBLISHABLE_KEY}>{children}</ClerkProvider>
}
