import { env } from '@/config'
import { useAuth } from '@clerk/clerk-react'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const useApi = () => {
  const { getToken, signOut } = useAuth()
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const onGetToken = async () => {
      const token = await getToken()
      setToken(token)
    }
    onGetToken()
  }, [getToken])

  const api = axios.create({
    baseURL: env.API_URL,
    headers: {
      authorization: `Bearer ${token}`,
    },
  })

  api.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      if (error.response?.status !== 401) {
        return Promise.reject(error)
      }

      signOut()
    }
  )

  return { api, token }
}
