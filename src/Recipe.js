export default function Recipe({ recipe, deleteRecipe }) {
  return (
    <tr>
      <td>
        <img src={recipe.photo} alt={recipe.name} />
      </td>
      <td>
        <div>
          <h2>{recipe.name}</h2>
          <p>{recipe.cuisine}</p>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients}
          </ul>
          <h3>Preparation</h3>
          <ol>
            {recipe.preparation}
          </ol>
        </div>
      </td>
      <td>
        <button name="delete" onClick={() => deleteRecipe(recipe.name)}>
          Delete
        </button>
      </td>
    </tr>
  );
}
