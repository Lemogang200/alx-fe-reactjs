
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Recipe not found</h2>
        <p>
          The recipe does not exist. Go back to the <Link to="/">list</Link>.
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      {!isEditing ? (
        <>
          <h1 style={{ marginBottom: "8px" }}>{recipe.title}</h1>
          <p style={{ color: "#555" }}>{recipe.description}</p>

          <div style={{ marginTop: "16px", display: "flex", gap: "10px" }}>
            <button
              onClick={() => setIsEditing(true)}
              style={{
                padding: "8px 12px",
                cursor: "pointer",
                background: "#ffd966",
                border: "none",
                borderRadius: "4px"
              }}
            >
              Edit
            </button>

            <DeleteRecipeButton recipeId={recipe.id} />

            <Link to="/" style={{ alignSelf: "center", marginLeft: "auto", textDecoration: "none" }}>
              ← Back to list
            </Link>
          </div>
        </>
      ) : (
        <div>
          <h2>Edit Recipe</h2>
          <EditRecipeForm existingRecipe={recipe} onDone={() => setIsEditing(false)} />
          <button
            onClick={() => setIsEditing(false)}
            style={{ marginTop: "10px", padding: "6px 10px", cursor: "pointer" }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;