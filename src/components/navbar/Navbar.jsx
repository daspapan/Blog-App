import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/facebook.png" alt="Facebook" width={24} height={24}/>
                <Image src="/instagram.png" alt="Instagram" width={24} height={24}/>
                <Image src="/x.png" alt="X" width={24} height={24}/>
                <Image src="/youtube.png" alt="YouTube" width={24} height={24}/>
                <Image src="/linkedin.png" alt="Linkedin" width={24} height={24}/>
            </div>
            <div className={styles.logo}>pratibha's blog</div>
            <div className={styles.links}>
                <ThemeToggle/>
                <Link href="/" className={styles.link}>Home</Link>
                <Link href="/" className={styles.link}>Contact</Link>
                <Link href="/" className={styles.link}>About</Link>
                <AuthLinks/>
            </div>
        </div>
    )
}

export default Navbar
