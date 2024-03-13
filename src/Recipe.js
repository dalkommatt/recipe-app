export default function Recipe({ recipe, deleteRecipe }) {
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo} alt={recipe.name} className="recipe-image" />
      </td>
      <td>{recipe.ingredients}</td>
      <td>{recipe.preparation}</td>
      <td>
        <button name="delete" onClick={() => deleteRecipe(recipe.name)}>
          Delete
        </button>
      </td>
    </tr>
  );
}
