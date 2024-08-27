import recipeData from './recipe.json';

function IngredientList() {

  const list = recipeData[0].ingredients.map((item) => (
    <li key={item}>
      {item}
    </li>
  ));

  return (
    <div>
      <h3> Ingredients </h3>
      <ul>{list}</ul>
    </div>
  );


}

export default IngredientList;

//import json file for the data
//use a nested map to get inside the inner array
