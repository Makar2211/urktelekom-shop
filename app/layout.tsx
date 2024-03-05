import type { Metadata } from 'next'
import './globalStyles/normolize.scss'
import './globalStyles/globals.scss'

export const metadata: Metadata = {
  title: 'Urktelekom',
  description: 'This is ukrtelekom',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
