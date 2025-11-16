import { Link } from "react-router-dom";
import useRecipeStore from "../recipeStore/useRecipeStore";

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  const favoriteRecipes = favorites
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter(Boolean);

  return (
    <div>
      <h2>My Favorites</h2>

      {favoriteRecipes.length === 0 && <p>No favorites yet.</p>}

      {favoriteRecipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            padding: "12px",
            border: "1px solid #ccc",
            marginBottom: "10px",
            borderRadius: "6px",
          }}
        >
          <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: "none" }}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;