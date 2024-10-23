import { QueryKey } from '@/apis'
import { useToast } from '@/components'
import { Codecs, ProjectInfo, ProjectOptions } from '@/schema'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type UpdateProjectsMutationPayload = {
  id: string
  data: {
    name: string
    options: ProjectOptions
    codecs: Codecs
  }
}

export const useUpdateProjectsMutation = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (payload: UpdateProjectsMutationPayload) => {
      const res = await fetch(`/api/projects/${payload?.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload?.data),
      })
      const data = await res.json()
      return data as ProjectInfo
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
