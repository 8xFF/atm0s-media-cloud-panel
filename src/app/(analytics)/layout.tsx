import { PrivateProvider } from '@/providers'

type Props = {
  children: React.ReactNode
}

const LayoutAnalytics: React.FC<Props> = ({ children }) => {
  return <PrivateProvider>{children}</PrivateProvider>
}

export default LayoutAnalytics
