import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  children: React.ReactNode
}

export const PrivateProvider: React.FC<Props> = ({ children }) => {
  const { isSignedIn, isLoaded } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate('/auth/sign-in', { replace: true })
    }
  }, [isLoaded, isSignedIn, navigate])

  return children
}
