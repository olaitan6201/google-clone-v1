import Link from "next/link"
import parse from "html-react-parser";

export default function WebSearchResults({ results }) {
    const { info, items } = results
    
    return (
        <div className="w-full lg:w-3/4 mx-auto lg:mx-0 px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <p className="text-gray-600 text-sm mb-5 mt-3">
                About {info?.formattedTotalResults} results ({info?.formattedSearchTime} seconds)
            </p>

            {items?.map(item => (
                <div className="mb-8 max-w-xl" key={`${item.link}`}>
                    <div className="group flex flex-col">
                        <Link href={item.link} className="text-sm truncate">
                            {item.formattedUrl}
                        </Link>
                        <Link href={item.link} className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800">
                            {item.title}
                        </Link>
                    </div>
                    <p className="text-gray-600">{parse(item.htmlSnippet)}</p>
                </div>
            ))}
        </div>
    )
}
