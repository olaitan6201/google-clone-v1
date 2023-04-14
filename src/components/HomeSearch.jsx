
'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

export default function HomeSearch() {
    const [input, setInput] = useState('')
    const [randomSearchLoading, setRandomSearchLoading] = useState(false)
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.trim().length === 0) return;
        const queryParam = input.trim().replace(/ /g, '+')
        router.push(`/search?q=${queryParam}`)
    }
    const randomSearch = async () => {
        setRandomSearchLoading(true)
        const res = await fetch('https://random-word-api.herokuapp.com/word')
        if (!res.ok) {
            throw new Error('Unable to search word')
        };
        const data = await res.json()
        if (!data) return;
        const word = data[0];
        const queryParam = word.trim().replace(/ /g, '+')
        router.push(`/search?q=${queryParam}`)
        setRandomSearchLoading(false)
    }
    return (
        <>
            <form className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow duration-200 focus-within:shadow-md sm:max-w-xl lg:max-w-2xl" onSubmit={handleSubmit}>
                <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
                <input
                    type="text"
                    className="flex-grow bg-transparent outline-none"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <BsFillMicFill className="text-lg" />
            </form>
            <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
                <button className="btn" onClick={handleSubmit}>Google Search</button>
                <button className="btn flex items-center justify-center disabled:opacity-80" disabled={randomSearchLoading} onClick={randomSearch}>
                    {randomSearchLoading ? <img src="/spinner.svg" className="h-6" alt="loading . . ." /> : `I'm feeling lucky!`}
                </button>
            </div>
        </>
    )
}
