import CardList from '@/components/cardList/CardList';
import styles from './homepage.module.css'
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from '@/components/menu/Menu';

export default function Home() {

    return (
        <div className={styles.container}>
            
            <Featured/>
            <CategoryList/>
            <div className={styles.content}>
                <CardList/>
                <Menu/>
            </div>
            
        </div>
    )

}