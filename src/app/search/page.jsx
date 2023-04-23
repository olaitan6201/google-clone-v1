'use client'

import ImageSearchResults from "@/components/ImageSearchResults";
import Loading from "@/components/Loading";
import Paginator from "@/components/Paginator";
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
	const [loading, setLoading] = useState(true)
	const [searchTab, setSearchTab] = useState('web')
	const [startIndex, setStartIndex] = useState(1)
	const [prevIndex, setPrevIndex] = useState(startIndex || 1)
	const [prevTab, setPrevTab] = useState('web')
	const query = searchParam.get('q') || ''


	useEffect(() => {
		if (query.trim().length > 0) {
			setMounted(false)
			setLoading(true)
			if (searchTab !== prevTab) setStartIndex(1)
			fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${query}${searchTab !== 'web' ? '&searchType=image' : ''}&start=${startIndex}`)
				.then(res => res.json())
				.then(res => {
					if (startIndex > prevIndex) setResults({ info: res.searchInformation, items: [...results.items, ...res.items] })
					else setResults({ info: res.searchInformation, items: res.items })
					setPrevIndex(startIndex)
					setPrevTab(searchTab)
				})
			setTimeout(() => {
				setLoading(false)
				setMounted(true)
			}, 500)
		}
	}, [searchTab, startIndex])

	const nextPage = () => setStartIndex(startIndex + 10)

	return (
		<div>
			<SearchHeader searchTab={searchTab} setSearchTab={setSearchTab} />

			<div className="pb-40 sm:pb-24">
				{mounted &&
					(results && (searchTab === 'web' ?
						<WebSearchResults results={results} /> :
						<ImageSearchResults results={results} />
					))
				}
				{loading && <Loading tab={searchTab} />}
				{mounted && results && <Paginator nextPage={nextPage} />}
			</div>
		</div>
	)
}
