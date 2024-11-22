import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'StillMind',
  description: 'Focus and relax with StillMind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@300;400;500&display=swap"
        />
      </head>
      <body className={`${inter.className} min-h-screen overflow-hidden`}>{children}</body>
    </html>
  )
}

