import { useMutation } from '@tanstack/react-query'

type UpdateProjectsMutationPayload = {
  id: string
  data: {
    name: string
  }
}

export const useUpdateProjectsMutation = () => {
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
      return data
    },
  })
}
