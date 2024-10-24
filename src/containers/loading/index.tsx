'use client'

import { useGetProjectsQuery } from '@/hooks'
import { isArray, isEmpty } from 'lodash'
import { LoaderCircleIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const Loading = () => {
  const router = useRouter()
  const { data: projects, isFetching: isFetchingProjects } = useGetProjectsQuery()

  useEffect(() => {
    if (!isFetchingProjects && isArray(projects?.list)) {
      if (!isEmpty(projects?.list)) {
        if (projects?.list?.length === 1) {
          router.push(`/projects/${projects?.list?.[0]?.id}`)
        } else {
          router.push('/projects/list')
        }
      } else {
        router.push('/create-project')
      }
    }
  }, [isFetchingProjects, projects, router])

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <LoaderCircleIcon size={32} className="animate-spin" />
    </div>
  )
}
