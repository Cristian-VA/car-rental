import './globals.css'
import type { Metadata } from 'next'
import { Navbar, Footer } from "../components/index"


export const metadata: Metadata = {
  title: 'GoRentals',
  description: 'Car rental site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      
        <body>
        <Navbar/>
          {children}
          <Footer/>
        </body>
     
    </html>
  )
}
