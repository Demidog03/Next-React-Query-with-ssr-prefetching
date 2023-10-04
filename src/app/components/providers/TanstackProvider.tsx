'use client'
import {QueryClientProvider} from '@tanstack/react-query'
import {ReactNode} from 'react'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {getQueryClient} from '@/utils/getQueryClient'

const queryClient = getQueryClient()

const TanstackProvider = ({children}: {children: ReactNode}) => {
  return (
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
  )
}

export default TanstackProvider
