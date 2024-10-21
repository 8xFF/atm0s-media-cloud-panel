import { PrivateProvider } from '@/providers'

type Props = {
  children: React.ReactNode
}

const LayoutCreatApp: React.FC<Props> = ({ children }) => {
  return <PrivateProvider>{children}</PrivateProvider>
}

export default LayoutCreatApp
