import '@styles/globals.css'
import { Inter } from 'next/font/google'



export const metadata = {
  title: 'Promtopia',
  description: 'Discover and share AI prompts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='main'>
        <div className='gradient'/>
        <main className='app'>
          {children}
        </main>
        
        </div>
      
      </body>
    </html>
  )
}
