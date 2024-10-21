import { useMutation } from '@tanstack/react-query'

type CreateProjectsMutationPayload = {
  name: string
}

export const useCreateProjectsMutation = () => {
  return useMutation({
    mutationFn: (payload: CreateProjectsMutationPayload) => {
      return fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => data)
    },
  })
}
