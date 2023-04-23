import { BsChevronDown } from "react-icons/bs";

export default function Paginator({ nextPage }) {
    return (
        <div className="w-full lg:w-3/4 mx-auto lg:mx-0 px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <div className="flex justify-center mb-5">
                <div className="flex bg-gray-900 items-center justify-center w-[50%] px-6 py-2 rounded-full cursor-pointer space-x-4 hover:brightness-125" onClick={nextPage}>
                    <span className="text-gray-400">More results</span> <BsChevronDown />
                </div>
            </div>
            <div className="border border-x-0 border-t-0 border-b border-gray-500 -mt-10"></div>
        </div>
    )
}
