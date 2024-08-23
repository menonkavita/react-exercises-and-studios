import recipeData from './recipe.json';
import './styling.css';


function RecipeImage() {
  const image = recipeData.map((img) =>
    <img className="recipeImage" key={img.author} alt={img.name}
      src={img.recipeImage}
      width={300} height={450} />
  );

  return (
    // <img className="recipeImage" src={recipeData[0].recipeImage} alt="Chocolate Bark" width={300} height={450} />
    <div>
          { image }
    </div>
  );
}

export default RecipeImage;

//import json file for the data
//apply css for className recipeImage
