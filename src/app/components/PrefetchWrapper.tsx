import { getQueryClient } from '@/utils/getQueryClient'
import { dehydrate } from '@tanstack/query-core'
import Hydrate from '@/app/components/Hydrate'
import React, { type ReactNode } from 'react'

interface PrefetchWrapperProps<T> {
  queryKey: string
  promiseCallback: () => Promise<T>
  children: ReactNode
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async function PrefetchWrapper<T> ({ queryKey, promiseCallback, children }: PrefetchWrapperProps<T>) {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery([`${queryKey}/${promiseCallback.name}`], promiseCallback)
  const dehydratedState = dehydrate(queryClient)
  return (
      <Hydrate state={dehydratedState}>
        {children}
      </Hydrate>
  )
}
