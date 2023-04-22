'use client'

import SearchHeader from "@/components/SearchHeader";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function SearchPage() {
  const API_KEY = 'AIzaSyC6uKhvSmPwZM2bctMUHVobIz1kCVyUrX4'
  const CONTEXT_KEY = 'c10e07f766faa4b7a'
  const searchParam = useSearchParams();
  const [results, setResults] = useState(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (searchParam.trim().length > 0) {
      fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchParam.get('q')}`)
        .then(res => res.json())
        .then(res => setResults(res.items))
        .then(res => setMounted(true))
    }
  }, [searchParam])

  return (
    <div>
      <SearchHeader />

      <div className="">
        {mounted &&
          (results && results.map(
            result => <div key={`${result.title}`}>{result.title}</div>
          ))
        }
      </div>
    </div>
  )
}
