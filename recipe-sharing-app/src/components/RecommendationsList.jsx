import { Link } from "react-router-dom";
import useRecipeStore from "../recipeStore/useRecipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  return (
    <div>
      <h2>Recommended For You</h2>

      <button
        onClick={generateRecommendations}
        style={{
          padding: "8px 12px",
          marginBottom: "15px",
          cursor: "pointer",
        }}
      >
        Refresh Recommendations
      </button>

      {recommendations.length === 0 && (
        <p>No recommendations available yet.</p>
      )}

      {recommendations.map((recipe) => (
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

export default RecommendationsList;