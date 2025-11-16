import {useRecipeStore} from "../recipeStore/useRecipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Recipe List</h2>

      {recipes.length === 0 && <p>No recipes yet. Add one below!</p>}

      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        >
          <h3 style={{ margin: 0 }}>
            <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: "none", color: "#333" }}>
              {recipe.title}
            </Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
