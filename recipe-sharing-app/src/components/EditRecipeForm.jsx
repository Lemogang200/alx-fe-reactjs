import { useState } from "react";
import useRecipeStore from "../store/recipeStore";

const EditRecipeForm = ({ existingRecipe, onDone }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(existingRecipe.title || "");
  const [description, setDescription] = useState(existingRecipe.description || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim()) return;

    updateRecipe({
      id: existingRecipe.id,
      title,
      description
    });

    if (onDone) onDone();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: "600px" }}
    >
      <input
        type="text"
        value={title}
        placeholder="Recipe Title"
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
      />

      <textarea
        value={description}
        placeholder="Recipe Description"
        onChange={(event) => setDescription(event.target.value)}
        style={{ padding: "8px", minHeight: "100px", borderRadius: "4px", border: "1px solid #ccc" }}
      />

      <button
        type="submit"
        style={{
          padding: "10px",
          cursor: "pointer",
          background: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;