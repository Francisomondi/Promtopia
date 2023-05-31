import '@styles/globals.css'




export const metadata = {
  title: 'Promtopia',
  description: 'Discover and share AI prompts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
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
