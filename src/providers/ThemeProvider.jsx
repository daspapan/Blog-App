"use client"

import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext, useEffect, useState } from 'react'

const ThemeProvider = ({children}) => {

    const {darkMode} = useContext(ThemeContext)

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        console.log("[Theme-Mounted]", mounted)
    }, [])

    if(mounted){
        return (
            <div className={darkMode ? "dark":"light"}>{children}</div>
        )
    }

}

export default ThemeProvider
