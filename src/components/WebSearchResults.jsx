import Link from "next/link"
import parse from "html-react-parser";

export default function WebSearchResults({ results }) {
    const { info, items } = results
    
    return (
        <div className="w-full lg:w-3/4 mx-auto lg:mx-0 px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <p className="text-gray-600 text-sm mb-5 mt-3">
                About {info?.formattedTotalResults} results ({info?.formattedSearchTime} seconds)
            </p>

            {items?.map(({link, formattedUrl, htmlSnippet, title}, i) => (
                <div className="mb-8 max-w-xl" key={`${link}${i}`}>
                    <div className="group flex flex-col">
                        <Link href={link} className="text-sm truncate">
                            {formattedUrl}
                        </Link>
                        <Link href={link} className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800">
                            {title}
                        </Link>
                    </div>
                    <p className="text-gray-600">{parse(htmlSnippet)}</p>
                </div>
            ))}
        </div>
    )
}
