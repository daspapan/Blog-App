import React from 'react'
import styles from './menu.module.css';
import Link from 'next/link';
import Image from 'next/image';
import MenuLinkItem from './MenuLinkItem';
import CategoryList from '../categoryList/CategoryList';

const Menu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{"What's hot"}</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <div className={styles.items}>

                <MenuLinkItem category="travel" showImageContainer={false} />

                <MenuLinkItem category="culture" showImageContainer={false} />

                <MenuLinkItem category="coding" showImageContainer={false} />

                <MenuLinkItem category="fashion" showImageContainer={false} />

            </div>

            <h2 className={styles.subtitle}>{"Discover by topic"}</h2>
            <h1 className={styles.title}>Categories</h1>
            <div className={styles.categoryList}>
                <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.style}`}>
                    Style
                </Link>

                <Link href="/blog?cat=fashion" className={`${styles.categoryItem} ${styles.fashion}`}>
                    Fashion
                </Link>

                <Link href="/blog?cat=food" className={`${styles.categoryItem} ${styles.food}`}>
                    Food
                </Link>

                <Link href="/blog?cat=travel" className={`${styles.categoryItem} ${styles.travel}`}>
                    Travel
                </Link>

                <Link href="/blog?cat=coding" className={`${styles.categoryItem} ${styles.coding}`}>
                    Coding
                </Link>

                <Link href="/blog?cat=culture" className={`${styles.categoryItem} ${styles.culture}`}>
                    Culture
                </Link>
                
            </div>
            

            <h2 className={styles.subtitle}>{"Chosen by the editor"}</h2>
            <h1 className={styles.title}>Editor's Pick</h1>
            <div className={styles.items}>

                <MenuLinkItem category="travel" showImageContainer={true} />

                <MenuLinkItem category="culture" showImageContainer={true} />

                <MenuLinkItem category="coding" showImageContainer={true} />

                <MenuLinkItem category="fashion" showImageContainer={true} />

            </div>

            
        </div>
    )
}

export default Menu