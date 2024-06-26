import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/sidebar'
import logo from "../Logo/G.png"
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GALLERY GAZE',
  description: 'Generated by Mohammad Salman',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <Navbar/>
        <div className='flex'>
          <div className='w-1/4'> 
            <Sidebar/> 
            </div> 
          <div className='w-full border-l'> {children} </div>
        </div>
        
        </body>
    </html>
  )
}
