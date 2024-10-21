import { ProjectInfo } from '@/schema'
import { atom } from 'recoil'

export const selectedProjectState = atom<ProjectInfo>({
  key: 'selectedProjectState',
  default: undefined,
})
