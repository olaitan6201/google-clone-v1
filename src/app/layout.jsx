import './globals.css'

export const metadata = {
  title: 'Google Clone',
  description: 'Google clone using Next.js 13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
