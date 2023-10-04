import { cache } from 'react'
import { QueryClient } from '@tanstack/react-query'

export const getQueryClient = cache(
  () => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnMount: false,
          refetchOnWindowFocus: false,
          refetchOnReconnect: false,
          retry: false
        }
      }
    })
  }
)
