import { QueryKey } from '@/apis'
import { ProjectInfo } from '@/schema'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

export const useGetProjectsByIdQuery = () => {
  const params = useParams()
  return useQuery({
    queryKey: [QueryKey.GetProjects, params?.id],
    queryFn: async () => {
      const res = await fetch(`/api/projects/${params?.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json()
      return data as ProjectInfo
    },
    enabled: !!params?.id,
    refetchOnWindowFocus: false,
  })
}
