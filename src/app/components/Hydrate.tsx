'use client'

import { Hydrate as HydrationBoundary } from '@tanstack/react-query'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Hydrate (props: any) {
  return <HydrationBoundary {...props} />
}
