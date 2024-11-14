import { useGetProjectsQuery } from '@/hooks'
import { isArray, isEmpty } from 'lodash'
import { LoaderCircleIcon } from 'lucide-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Loading = () => {
  const navigate = useNavigate()
  const { data: projects, isFetching: isFetchingProjects } = useGetProjectsQuery()

  useEffect(() => {
    if (!isFetchingProjects && isArray(projects?.items)) {
      if (!isEmpty(projects?.items)) {
        if (projects?.items?.length === 1) {
          navigate(`/projects/${projects?.items?.[0]?.id}`, { replace: true })
        } else {
          navigate('/projects', { replace: true })
        }
      } else {
        navigate('/projects/create', { replace: true })
      }
    }
  }, [isFetchingProjects, navigate, projects])

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <LoaderCircleIcon size={32} className="animate-spin" />
    </div>
  )
}
