import { QueryKey } from '@/apis'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { useApi } from '..'

export const useGetProjectsByIdQuery = () => {
  const params = useParams()
  const { api, token } = useApi()

  return useQuery({
    queryKey: [QueryKey.GetProjectsById, params?.id],
    queryFn: async () => {
      const res = await api.get(`/api/projects/${params?.id}`)
      return res.data
    },
    enabled: !!token && !!params?.id,
    refetchOnWindowFocus: false,
  })
}
