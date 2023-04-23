'use client'

import { useTheme } from "next-themes";
import CountryLookup from "./CountryLookup";
import { useEffect, useState } from "react";

export default function Footer() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])
    const currentTheme = theme === "system" ? systemTheme : theme;

    const currentThemeColor = currentTheme === 'dark' ? 'bg-gray-800' : 'bg-[#f2f2f2]';
    return (
        <div className={`absolute bottom-0 text-sm text-gray-500 ${mounted && currentThemeColor} w-full`}>
            <div className="border-b px-8 py-3">
                <CountryLookup />
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
                <ul className="links">
                    <li className="link">About</li>
                    <li className="link">Advertising</li>
                    <li className="link">Business</li>
                    <li className="link">How Search works</li>
                </ul>
                <ul className="links">
                    <li className="link">Privacy</li>
                    <li className="link">Terms</li>
                    <li className="link">Settings</li>
                </ul>
            </div>
        </div>
    )
}
