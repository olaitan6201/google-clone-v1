import '../globals.css'
import SearchHeader from '@/components/SearchHeader'

export const metadata = {
  title: 'Google Clone',
  description: 'Google clone using Next.js 13',
}

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  )
}
