import useRecipeStore from "../recipeStore/useRecipeStore";

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  return (
    <button
      onClick={() => (isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId))}
      style={{
        padding: "8px 12px",
        marginTop: "10px",
        cursor: "pointer",
        background: isFavorite ? "#ff6666" : "#eee",
        border: "1px solid #ccc",
        borderRadius: "6px",
      }}
    >
      {isFavorite ? "★ Remove Favorite" : "☆ Add to Favorites"}
    </button>
  );
};

export default FavoriteButton;
