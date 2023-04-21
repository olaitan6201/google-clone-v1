'use client'

import Image from "next/image"
import Link from "next/link"
import SearchBox from "./SearchBox"
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
    return (
        <header className="sticky top-0">
            <div className="flex w-full p-6 items-center justify-between">
                <Link href={"/"}>
                    <Image src={"/google.png"} width={120} height={40} />
                </Link>
                <div className="flex-1">
                    <SearchBox />
                </div>
                <div className="hidden md:inline-flex space-x-2">
                    <RiSettings3Line className="header-icon"/>
                    <TbGridDots className="header-icon"/>
                </div>
                <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadown-md transition-all duration-200 ml-2">Sign In</button>
            </div>
            <SearchHeaderOptions />
        </header>
    )
}
