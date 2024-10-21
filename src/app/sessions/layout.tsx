import { PrivateProvider } from '@/providers'

type Props = {
  children: React.ReactNode
}

const LayoutSessions: React.FC<Props> = ({ children }) => {
  return <PrivateProvider>{children}</PrivateProvider>
}

export default LayoutSessions
