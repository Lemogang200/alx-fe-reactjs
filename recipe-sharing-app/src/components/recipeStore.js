import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],

  searchTerm: "",
  filteredRecipes: [],

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

   // FAVORITES
  favorites: [],
  addFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.includes(id)
        ? state.favorites
        : [...state.favorites, id],
    })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  // RECOMMENDATIONS
   recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      if (state.favorites.length === 0) {
        return { recommendations: [] };
      }

      // Simple mock recommendation system:
      // Recommend recipes sharing the same ingredients as favorites
      const favoriteRecipes = state.recipes.filter((r) =>
        state.favorites.includes(r.id)
      );

      const favoriteIngredients = new Set(
        favoriteRecipes.flatMap((recipe) => recipe.ingredients || [])
      );

      const recommended = state.recipes.filter((recipe) => {
        const hasOverlap = recipe.ingredients?.some((ingredient) =>
          favoriteIngredients.has(ingredient)
        );
        const isFavorite = state.favorites.includes(recipe.id);

        return hasOverlap && !isFavorite;
      });

      return { recommendations: recommended };
    }),
    
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) => {
        const term = state.searchTerm.toLowerCase();

        return (
          recipe.title.toLowerCase().includes(term) ||
          recipe.description.toLowerCase().includes(term) ||
          recipe.ingredients?.some((ing) =>
            ing.toLowerCase().includes(term)
          ) ||
          String(recipe.time).includes(term) // match cooking time
        );
      })
    })),

  addRecipe: (newRecipe) =>
    set((state) => {
      const updated = [...state.recipes, newRecipe];

      return {
        recipes: updated,
        filteredRecipes: get().searchTerm ? updated.filter((r) =>
          r.title.toLowerCase().includes(get().searchTerm.toLowerCase())
        ) : updated
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? { ...r, ...updatedRecipe } : r
      );

      return {
        recipes: updated,
        filteredRecipes: get().searchTerm ? updated.filter((r) =>
          r.title.toLowerCase().includes(get().searchTerm.toLowerCase())
        ) : updated
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);

      return {
        recipes: updated,
        filteredRecipes: get().searchTerm ? updated.filter((r) =>
          r.title.toLowerCase().includes(get().searchTerm.toLowerCase())
        ) : updated
      };
    }),
    setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
}));

export default useRecipeStore;