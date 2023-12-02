import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'salman_code',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
