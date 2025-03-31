import React from 'react';
import styles from './menu.module.css';
import Link from 'next/link';
import Image from 'next/image';

const MenuLinkItem = ({category, showImageContainer}) => {
    const bg = {
        style: "#57c4ff",
        fashion: "#da85c7",
        food: "#7fb881",
        travel: "#ff7957",
        culture: "#ffb04f",
        coding: "#5e4fff"
    }

    const style = {
        backgroundColor: bg[category]
    }

    return (
        <>
            <Link href="/" className={styles.item}>
                {showImageContainer && (<div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>)}

                <div className={styles.textContainer}>
                    <span className={styles.category} style={style}>{category}</span>

                    <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>

                    <div className={styles.detail}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default MenuLinkItem