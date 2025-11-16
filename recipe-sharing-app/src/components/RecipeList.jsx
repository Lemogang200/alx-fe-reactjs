import { Link } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.searchTerm ? state.filteredRecipes : state.recipes
  );

  return (
    <div>
      {recipes.length === 0 && (
        <p style={{ color: "#777" }}>No recipes found.</p>
      )}

      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            padding: "12px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            marginBottom: "12px"
          }}
        >
          <h3>
            <Link
              to={`/recipes/${recipe.id}`}
              style={{ textDecoration: "none", color: "#333" }}
            >
              {recipe.title}
            </Link>
          </h3>

          <p style={{ color: "#666" }}>{recipe.description}</p>

          <p style={{ fontSize: "14px", color: "#999" }}>
            Ingredients: {recipe.ingredients?.join(", ")}
          </p>
          <p style={{ fontSize: "14px", color: "#999" }}>
            Time: {recipe.time} min
          </p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
