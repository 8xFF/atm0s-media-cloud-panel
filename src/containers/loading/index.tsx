'use client'

import { useGetProjectsQuery } from '@/hooks'
import { selectedProjectState } from '@/recoils'
import { isEmpty } from 'lodash'
import { LoaderCircleIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

export const Loading = () => {
  const router = useRouter()
  const { data: projects } = useGetProjectsQuery()
  const setSelectedProject = useSetRecoilState(selectedProjectState)

  useEffect(() => {
    if (!isEmpty(projects)) {
      router.push('/')
    } else {
      router.push('/create-project')
    }
  }, [projects, router, setSelectedProject])

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <LoaderCircleIcon size={32} className="animate-spin" />
    </div>
  )
}
