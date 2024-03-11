import React, { useState } from "react";

function RecipeCreate({ setRecipes }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      name,
      cuisine,
      photo,
      ingredients,
      preparation,
    };
    console.log(newRecipe);
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
    // Reset the form values
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td>Cuisine:</td>
            <td>
              <input
                type="text"
                name="cuisine"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
              />
            </td>
            <td>Photo URL:</td>
            <td>
              <input
                type="text"
                name="photo"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </td>
            <td>Ingredients:</td>
            <td>
              <textarea
                name="ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              ></textarea>
            </td>
            <td>Preparation:</td>
            <td>
              <textarea
                name="preparation"
                value={preparation}
                onChange={(e) => setPreparation(e.target.value)}
              ></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
