import { PrivateProvider } from '@/providers'

type Props = {
  children: React.ReactNode
}

const LayoutLoading: React.FC<Props> = ({ children }) => {
  return <PrivateProvider>{children}</PrivateProvider>
}

export default LayoutLoading
