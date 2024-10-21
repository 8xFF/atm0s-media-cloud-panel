'use server'

import { getToken } from '@/utils/session'
import { redirect } from 'next/navigation'

type Props = {
  children: React.ReactNode
}

export const PrivateProvider: React.FC<Props> = ({ children }) => {
  const token = getToken()
  if (!token) {
    redirect('/auth/sign-in')
  }

  return children
}
