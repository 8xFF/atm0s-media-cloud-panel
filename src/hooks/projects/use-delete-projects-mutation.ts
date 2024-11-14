import { QueryKey } from '@/apis'
import { useApi, useToast } from '@/hooks'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

type DeleteProjectsMutationPayload = {
  id: string
}

export const useDeleteProjectsMutation = () => {
  const { api } = useApi()
  const navigate = useNavigate()
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (payload: DeleteProjectsMutationPayload) => {
      const res = await api.delete(`/api/projects/${payload?.id}`)
      return res.data
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [QueryKey.GetProjects],
      })
      toast({
        title: 'Project deleted',
        description: 'Your project has been deleted successfully.',
        duration: 2000,
      })
      navigate('/')
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'An error occurred while creating your project.',
        duration: 2000,
      })
    },
  })
}
