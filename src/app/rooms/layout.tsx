import { PrivateProvider } from '@/providers'

type Props = {
  children: React.ReactNode
}

const LayoutRooms: React.FC<Props> = ({ children }) => {
  return <PrivateProvider>{children}</PrivateProvider>
}

export default LayoutRooms
