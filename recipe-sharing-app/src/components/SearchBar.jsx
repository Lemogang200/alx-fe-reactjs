import useRecipeStore from "../store/recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes by title, ingredient, or time..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: "10px",
        width: "100%",
        maxWidth: "600px",
        marginBottom: "20px",
        borderRadius: "6px",
        border: "1px solid #ccc"
      }}
    />
  );
};

export default SearchBar;