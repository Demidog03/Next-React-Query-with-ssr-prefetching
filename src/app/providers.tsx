'use client'
import { type ReactNode } from 'react'
import TanstackProvider from '@/app/components/providers/TanstackProvider'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function Providers ({ children }: { children: ReactNode }) {
  return (
      <TanstackProvider>
        {children}
      </TanstackProvider>
  )
}
