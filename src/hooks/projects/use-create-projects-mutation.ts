import { QueryKey } from '@/apis'
import { useApi, useToast } from '@/hooks'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type CreateProjectsMutationPayload = {
  data: {
    name: string
  }
}

export const useCreateProjectsMutation = () => {
  const { api } = useApi()
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (payload: CreateProjectsMutationPayload) => {
      const res = await api.post(`/api/projects`, payload.data)
      return res.data
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [QueryKey.GetProjects],
      })
      toast({
        title: 'Project created',
        description: 'Your project has been created successfully.',
        duration: 2000,
      })
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
