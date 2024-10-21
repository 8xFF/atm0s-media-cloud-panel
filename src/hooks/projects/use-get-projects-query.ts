import { QueryKey } from '@/apis'
import { ProjectList } from '@/schema'
import { useQuery } from '@tanstack/react-query'

export const useGetProjectsQuery = () => {
  return useQuery<ProjectList>({
    queryKey: [QueryKey.GetProjects],
    queryFn: async () => {
      const res = await fetch('/api/projects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json()
      return data
    },
  })
}
