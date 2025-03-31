"use client"

import { useEffect, useState } from 'react';
import { createContext } from "react";

export const ThemeContext = createContext()

const getFormLocalStorage = () => {
    if(typeof window !== 'undefined'){
        const value = localStorage.getItem('darkMode')
        return value ? JSON.parse(value) : false
    }
}

export const ThemeContextProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(() => {
        return getFormLocalStorage()
    })

    const toggle = () => {
        setDarkMode(!darkMode)
        localStorage.setItem('darkMode', JSON.stringify(!darkMode))
    }

    return (
        <ThemeContext.Provider value={{darkMode, toggle}}>
            {children}
        </ThemeContext.Provider>
    )
}