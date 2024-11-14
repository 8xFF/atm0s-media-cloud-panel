import { QueryKey } from '@/apis'
import { useApi, useToast } from '@/hooks'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type UpdateProjectsMutationPayload = {
  id: string
  data: {
    name: string
    options: unknown
    codecs: unknown
  }
}

export const useUpdateProjectsMutation = () => {
  const { api } = useApi()
  const { toast } = useToast()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (payload: UpdateProjectsMutationPayload) => {
      const res = await api.put(`/api/projects/${payload?.id}`, payload.data)
      return res.data
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [QueryKey.GetProjects],
      })
      toast({
        title: 'Settings updated',
        description: 'Your settings have been updated successfully.',
        duration: 2000,
      })
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'An error occurred while updating your settings.',
        duration: 2000,
      })
    },
  })
}
