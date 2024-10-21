import { useMutation } from '@tanstack/react-query'

type CreateProjectsMutationPayload = {
  data: {
    name: string
  }
}

export const useCreateProjectsMutation = () => {
  return useMutation({
    mutationFn: async (payload: CreateProjectsMutationPayload) => {
      const res = await fetch('/api/projects', {
        method: 'POST',
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
