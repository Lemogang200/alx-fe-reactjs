// src/components/DeleteRecipeButton.jsx
import { useNavigate } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    const ok = window.confirm("Are you sure you want to delete this recipe?");
    if (!ok) return;

    deleteRecipe(recipeId);
    navigate("/"); 
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteRecipeButton;