import { useState } from "react";
import {useRecipeStore} from "../recipeStore/useRecipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    addRecipe({
      id: Date.now(),
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h2>Add a New Recipe</h2>

      <input
        type="text"
        value={title}
        placeholder="Recipe Title"
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "8px" }}
      />

      <textarea
        value={description}
        placeholder="Recipe Description"
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: "8px", minHeight: "80px" }}
      />

      <button type="submit" style={{ padding: "10px", cursor: "pointer" }}>
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;