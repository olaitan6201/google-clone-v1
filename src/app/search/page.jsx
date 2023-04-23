'use client'

import ImageSearchResults from "@/components/ImageSearchResults";
import SearchHeader from "@/components/SearchHeader";
import WebSearchResults from "@/components/WebSearchResults";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function SearchPage() {
  const API_KEY = 'AIzaSyC6uKhvSmPwZM2bctMUHVobIz1kCVyUrX4'
  const CONTEXT_KEY = 'c10e07f766faa4b7a'
  const searchParam = useSearchParams();
  const [results, setResults] = useState(null)
  const [mounted, setMounted] = useState(false)
  const [searchTab, setSearchTab] = useState('web')
  const [query, setQuery] = useState(searchParam.get('q') || '')


  useEffect(() => {
    if (query.trim().length > 0) {
      fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${query}${searchTab !== 'web' ? '&searchType=image' : ''}`)
        .then(res => res.json())
        .then(res => setResults({ info: res.searchInformation, items: res.items }))
        .then(res => setMounted(true))
    }
  }, [query, searchTab])

  return (
    <div>
      <SearchHeader searchTab={searchTab} setSearchTab={setSearchTab} />

      <div className="">
        {mounted &&
          (results && (searchTab === 'web' ?
            <WebSearchResults results={results} /> :
            <ImageSearchResults results={results} />
          ))
        }
      </div>
    </div>
  )
}
