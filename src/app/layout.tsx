import { globalStyles } from './components/GlobalStyles'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CssBaseline } from '@mui/material'
import { Providers } from '@/app/providers'
import { Toaster } from 'react-hot-toast'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IKomek test project',
  description: 'IKomek test project'
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <CssBaseline/>
          {globalStyles}
          {children}
          <Toaster/>
        </Providers>
      </body>
    </html>
  )
}
