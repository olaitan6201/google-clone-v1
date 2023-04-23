import Link from "next/link"
import parse from 'html-react-parser'

export default function ({ results }) {
    const { info, items } = results
    return (
        <div className="pb-40 sm:pb-24 mt-4">
            <p className="text-gray-600 text-sm mb-5 mt-3">
                About {info?.formattedTotalResults} results ({info?.formattedSearchTime} seconds)
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
                {items?.map(({ link, image, title, displayLink, htmlTitle }) => (
                    <div className="mb-8" key={link}>
                        <div className="group">
                            <Link href={image?.contextLink || link}>
                                <img src={link} alt={title} className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow duration-300" />
                            </Link>
                            <Link href={image?.contextLink || link}>
                                <h2 className="group-hover:underline truncate text-xl">{parse(htmlTitle)}</h2>
                            </Link>
                            <Link href={image?.contextLink || link}>
                                <p className="group-hover:underline text-gray-600">{displayLink}</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
