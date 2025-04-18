"use client"

import React, { useContext } from 'react'
import styles from './themetoggle.module.css';
import Image from 'next/image';
import { ThemeContext } from '@/context/ThemeContext';

const ThemeToggle = () => {

    const {darkMode, toggle} = useContext(ThemeContext)

    // console.log("[Theme-Darkmode]", darkMode)

    return (
        <div 
            className={styles.container} 
            onClick={toggle}
            style={
                darkMode 
                ? {background: "white"} 
                : {background:"#0f172a"}}
        >
            <Image src="/moon.png" alt='' width={14} height={14}/>
            <div 
                className={styles.ball} 
                style={
                    darkMode 
                    ? {left: 1, background: "#0f172a"} 
                    : {right: 1, background:"white"}}></div>
            <Image src="/sun.png" alt='' width={14} height={14}/>
        </div>
    )
}

export default ThemeToggle