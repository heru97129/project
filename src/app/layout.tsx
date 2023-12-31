

import '../../pages/globals.css'

import { Inter } from 'next/font/google'
import {
  Providers} from './GlobalRedux/provider'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>

        {children}
        </Providers>
   
        </body>
    </html>
  )
}
