'use client'

import axios from 'axios'

export const useApi = (url?: string) => {
  const api = axios.create({
    baseURL: url,
  })

  api.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      if (error.response?.status !== 401) {
        return Promise.reject(error)
      } else {
        //
      }
    }
  )

  return { api }
}
