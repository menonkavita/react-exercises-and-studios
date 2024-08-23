import { useState } from 'react';
import './styling.css';

const RecipeAuthor = () => {
   let authorLink = "https://bobbyflay.com/";
   let authorPhoto = "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/10/1/0/BY2205_portrait.jpg";
   let authorName = "Bobby Flay";

   return (
      <div>
         <img src={authorPhoto} alt="" style={{ objectFit: "contain", borderRadius: "50%" }} width={200} height={150} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a>
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["1/2 cup uncooked quinoa",
      "8 ounces bittersweet chocolate, coarsely chopped",
      "3 tablespoons pure maple syrup",
      "3/4 cup coarsely chopped almonds",
      "1 tablespoon coconut oil or extra virgin olive oil"
   ];
   return (
      <div>
         <h3 className='bullets'>Recipe Ingredients</h3>
         <ul className='bullets'>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div>
         <div>
            <h1>Bittersweet Chocolate Maple Bark</h1>
            <p className='recipeDescription'>This is recipe that feels indulgent but is packed full of healthful ingredients, and it just so happens to be directly
               from the pages of Bobby Flay's Fit Cookbook. Did you know that Bittersweet Chocolate (that is at least 71% cacao) is
               actually good for you?</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://api.bobbyflay.com/wp-content/uploads/2022/01/dsc09193-scaled.jpg"
         alt="Bittersweet Chocolate Maple Bark" 
         className="imageUpdates"
         width={300} height={450} />
   );
}

export default function RecipeDisplay() {
   return (
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
