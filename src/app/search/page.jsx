'use client'

import ImageSearchResults from "@/components/ImageSearchResults";
import Loading from "@/components/Loading";
import Paginator from "@/components/Paginator";
import SearchHeader from "@/components/SearchHeader";
import WebSearchResults from "@/components/WebSearchResults";
import { useSearchParams } from "next/navigation";
import { useEffect, useReducer, useState } from "react";

function resultsReducer(state, action) {
	const { type, payload } = action
	const { info, items } = payload
	switch (type) {
		case 'add_results':
			return {
				info,
				items
			}

		case 'update_results':
			return {
				info,
				items: [...state.items, ...items]
			}

		default:
			return { info: state.info, items: state.items }
	}
}

export default function SearchPage() {
	const API_KEY = 'AIzaSyC6uKhvSmPwZM2bctMUHVobIz1kCVyUrX4'
	const CONTEXT_KEY = 'c10e07f766faa4b7a'
	const [results, resultsDispatch] = useReducer(resultsReducer, { info: null, items: [] })
	const [mounted, setMounted] = useState(false)
	const [loading, setLoading] = useState(true)
	const [searchTab, setSearchTab] = useState('web')
	const [startIndex, setStartIndex] = useState(1)
	const searchParam = useSearchParams()
	const query = searchParam.get('q') || ''

	const fetchData = async (isUpdate = false) => {
		if (query.trim().length > 0) {
			setMounted(false)
			setLoading(true)
			const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${query}${searchTab !== 'web' ? '&searchType=image' : ''}&start=${startIndex}`)
			const data = await res.json()
			let type = 'add_results'
			if (isUpdate) type = 'update_results'
			resultsDispatch({ type, payload: { info: data.searchInformation, items: data.items } })
		}
		setTimeout(() => {
			setLoading(false)
			setMounted(true)
		}, 500)
	}

	useEffect(() => {
		setStartIndex(1)
		fetchData()
	}, [searchTab])

	const nextPage = () => {
		setStartIndex(startIndex + 10)
		fetchData(true)
	}

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