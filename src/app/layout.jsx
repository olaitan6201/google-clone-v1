import Footer from '@/components/Footer'
import './globals.css'
import Providers from './Providers'

export const metadata = {
  title: 'Google Clone',
  description: 'Google clone using Next.js 13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative min-h-screen'>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>

    </html>
  )
}
