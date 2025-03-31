import React from 'react';
import styles from './BlogPage.module.css';

const BlogPage = () => {
    return (
        <div className={styles.container}>

            <h1 className={styles.title}>Blog Page</h1>

            <div className={styles.content}>
                <p>This is the blog page content.</p>
            </div>
            
        </div>
    )
}

export default BlogPage