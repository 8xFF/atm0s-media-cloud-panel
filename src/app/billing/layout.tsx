import { PrivateProvider } from '@/providers'

type Props = {
  children: React.ReactNode
}

const LayoutBilling: React.FC<Props> = ({ children }) => {
  return <PrivateProvider>{children}</PrivateProvider>
}

export default LayoutBilling
