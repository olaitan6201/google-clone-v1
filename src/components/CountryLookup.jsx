"use client"

import { useEffect, useState } from "react"

export default function CountryLookup() {
    const [country, setCountry] = useState('')

    useEffect(() => {
        fetch('https://ipwho.is').then(res => res.json()).then(res => {
            setCountry(res.country)
        })
    }, [])
    
    return (
        <span>
            {country}
        </span>
    )
}
