'use client'

import { useState } from "react";
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";

export default function SearchHeaderOptions() {
  const [searchTab, setSearchTab] = useState('web')

  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start pl-52 text-gray-700 text-sm">
      <div className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${searchTab === 'web' && "!text-blue-600 !border-blue-600"}`} onClick={() => setSearchTab('web')}>
        <AiOutlineSearch className="text-md" />
        <span>All</span>
      </div>
      <div className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${searchTab === 'images' && "!text-blue-600 !border-blue-600"}`} onClick={() => setSearchTab('images')}>
        <AiOutlineCamera className="text-md" />
        <span>Images</span>
      </div>
    </div>
  )
}
