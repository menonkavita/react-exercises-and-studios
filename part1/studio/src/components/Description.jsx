import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://natashaskitchen.com/apple-pie-recipe/";
    let authorPhoto = "https://natashaskitchen.com/wp-content/uploads/2023/02/NK-Head-Red-Shirt-small.png";
    let authorName = "Natasha Kravchuk";

    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Picture of Natasha Kravchuk" className={styles.imageUpdates} />
            <div>
                <h3> {authorName} </h3>
                <a href={authorLink}>Natasha's Kitchen</a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <h1>Apple Pie with the Best Filling</h1>
                    <p>Classic Apple Pie Recipe with an irresistible homemade apple pie filling. From the best flaky pie crust to the
                        generous saucy center, this recipe always gets glowing reviews. This is the pie everyone has to make for 
                        Thanksgiving!</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}

export default RecipeDescription;
