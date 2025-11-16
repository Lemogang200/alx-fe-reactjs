import { BrowserRouter, Routes, Route } from "react-router-dom";

import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function HomePage() {
  return (
    <div style={{ width: "720px", margin: "0 auto", padding: "20px" }}>
      <h1>Recipe Sharing App</h1>

      <SearchBar />

      <AddRecipeForm />
      <RecipeList />

      <hr style={{ margin: "30px 0" }} />

      <FavoritesList />

      <hr style={{ margin: "30px 0" }} />

      <RecommendationsList />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;