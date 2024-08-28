import React from 'react';
import "./App.css";
import RateARecipe from "./components/RateARecipe";
import Button from "./components/Button";
import AuthorInfo from "./components/AuthorInfo";
import IngredientList from "./components/Ingredients";
import RecipeImage from "./components/RecipeImage";
import RecipeName from "./components/RecipeName";
import { useState } from 'react';


export default function App() {

  const [buttonSave, setButton] = useState(true);

  return (
    <>
      <RecipeImage />
      <RecipeName />
      <RateARecipe rating={5} />
      <Button
        saveButton={buttonSave}
        setButton={setButton}
      />
      <AuthorInfo />
      <IngredientList />
    </>
  );
}
