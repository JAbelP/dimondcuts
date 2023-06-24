import './globals.css'
import { Inter,Montserrat } from 'next/font/google'




const montserrat = Montserrat({ subsets: ['latin'] }) 
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}