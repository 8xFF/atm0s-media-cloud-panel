import { PrivateProvider } from '@/providers'

type Props = {
  children: React.ReactNode
}

const LayoutSetting: React.FC<Props> = ({ children }) => {
  return <PrivateProvider>{children}</PrivateProvider>
}

export default LayoutSetting
