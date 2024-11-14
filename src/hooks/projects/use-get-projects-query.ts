import { QueryKey } from '@/apis'
import { useApi } from '@/hooks'
import { useQuery } from '@tanstack/react-query'

export const useGetProjectsQuery = () => {
  const { api, token } = useApi()

  return useQuery({
    queryKey: [QueryKey.GetProjects],
    queryFn: async () => {
      const res = await api.get(`/api/projects`)
      return res.data
    },
    enabled: !!token,
    refetchOnWindowFocus: false,
  })
}
