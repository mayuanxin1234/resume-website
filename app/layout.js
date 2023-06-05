import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ma Yuanxin Portfolio',
  description: 'Ma Yuanxin portfolio. I am a year 3 NUS national university of singapore student studying computer science and this is my portfolio page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
