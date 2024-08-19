import styles from './Ingredients.module.css';


export default function RecipeIngredients() {
    let ingredients = ["6-7 Granny Smith Apples, peeled, cored (thinly sliced)",
        "1 1/2 tsp cinnamon",
        "8 Tbsp unsalted butter",
        "3 Tbsp  all-purpose flour",
        "1 cup granulated sugar"];

    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className={styles.ingredientList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
            </ul>
        </div>
    )
}