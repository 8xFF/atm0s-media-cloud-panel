import { QueryKey } from '@/apis'
import { ProjectList } from '@/schema'
import { useQuery } from '@tanstack/react-query'

export const useGetProjectsQuery = () => {
  return useQuery<ProjectList>({
    queryKey: [QueryKey.GetProjects],
    queryFn: async () => {
      return await fetch('/api/projects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => data)
    },
  })
}
