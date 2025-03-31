import React from 'react'
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className={styles.container}>

            <div className={styles.footerContainer}>

                <div className={styles.info}>

                    <div className={styles.logo}>
                        <Image src="/logo.png" alt="lama blog" width={50} height={50} />
                        <h1 className={styles.logoText}>Pratibha's Blog</h1>
                    </div>

                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto laboriosam, numquam eligendi amet molestiae expedita deserunt ullam eius placeat dolores, minima aperiam dignissimos officia. Reprehenderit perferendis architecto nisi adipisci minima.
                    </p>

                    <div className={styles.icons}>

                        <Image src="/facebook.png" alt="Facebook" width={18} height={18}/>
                        <Image src="/instagram.png" alt="Instagram" width={18} height={18}/>
                        <Image src="/x.png" alt="X" width={18} height={18}/>
                        <Image src="/youtube.png" alt="YouTube" width={18} height={18}/>
                        <Image src="/linkedin.png" alt="Linkedin" width={18} height={18}/>

                    </div>

                </div>

                <div className={styles.links}>

                    <div className={styles.list}>
                        <span className={styles.listTitle}>Links</span>
                        <Link href="/">Home</Link>
                        <Link href="/">Blog</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Contact</Link>
                    </div>

                    <div className={styles.list}>
                        <span className={styles.listTitle}>Tags</span>
                        <Link href="/">Style</Link>
                        <Link href="/">Fashion</Link>
                        <Link href="/">Coding</Link>
                        <Link href="/">Travel</Link>
                    </div>

                    <div className={styles.list}>
                        <span className={styles.listTitle}>Social</span>
                        <Link href="/">Facebook</Link>
                        <Link href="/">Instagram</Link>
                        <Link href="/">X</Link>
                        <Link href="/">Youtube</Link>
                        <Link href="/">Linkedin</Link>
                    </div>

                </div>

            </div>

            <div className={styles.copyrightContainer}>

                <div className={styles.right}>
                    <p>copyright all right reserved</p>
                    <p>Designed by Pratibha</p>
                </div>

                

                <div className={styles.term}>
                    <Link href="/">Terms of Service</Link>
                    <Link href="/">Privacy Policy</Link>
                    <Link href="/">Copyright Notice</Link>
                </div>

            </div>

        </div>
    )
}

export default Footer