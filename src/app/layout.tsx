import { Header } from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Meteora',
  description: 'Moda de impacto positivo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
