import React from 'react'
import Image from 'next/image';
import styles from './card.module.css';
import Link from 'next/link';

const Card = () => {
    return (
        <div className={styles.container}>

            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>01.01.2023 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>

                <Link href="/">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                </Link>
                
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit....
                </p>

                <Link href="/" className={styles.link}>
                    <span>Continue Reading</span>
                </Link>
            </div>
            
        </div>
    )
}

export default Card