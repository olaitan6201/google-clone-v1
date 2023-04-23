export default function Loading({ tab }) {
    return (
        <>
            {tab === 'web' ?
                Array.from({ length: 5 }, (x, i) => (
                    <div className="max-w-6xl sm:pl-[5%] md:pl-[14%] lg:pl-52 animate-pulse pb-8" key={i}>
                        <div className="h-2.5 w-48 bg-gray-500 rounded-full mb-2.5"></div>
                        <div className="h-3.5 max-w-[360px] bg-gray-500 rounded-full mb-2.5"></div>
                        <div className="h-2 max-w-[560px] bg-gray-500 rounded-full mb-2.5"></div>
                        <div className="h-2 max-w-[530px] bg-gray-500 rounded-full mb-2.5h-2 "></div>
                    </div>))
                :
                <div className="pt-2 mx-2 max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
                    {Array.from({ length: 10 }, (x, i) => (
                        <div className="animate-pulse" key={i}>
                            <div className="h-60 w-full mb-4 bg-gray-200 rounded-md"></div>
                            <div className="h-2 w-full mb-2.5 bg-gray-200 rounded-md"></div>
                            <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div>
                        </div>
                    ))}
                </div>
            }
        </>
    )
}
