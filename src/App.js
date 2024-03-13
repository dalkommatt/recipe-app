import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  const deleteRecipe = (name) => {
    setRecipes((prevRecipes) => {
      return prevRecipes.filter((recipe) => recipe.name !== name);
    });
  };

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate setRecipes={setRecipes} />
    </div>
  );
}

export default App;
