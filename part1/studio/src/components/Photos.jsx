import styles from './Description.module.css';


export default function RecipePhoto() {

    return (
        <img src="https://natashaskitchen.com/wp-content/uploads/2019/10/Apple-Pie-2-1024x1536.jpg" alt="Apple Pie photo" width={325} height={450} className={styles.imageUpdates} />
    );
}