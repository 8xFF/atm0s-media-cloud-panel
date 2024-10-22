import { PrivateProvider } from '@/providers'

type Props = {
  children: React.ReactNode
}

const LayoutCreatProject: React.FC<Props> = ({ children }) => {
  return <PrivateProvider>{children}</PrivateProvider>
}

export default LayoutCreatProject
