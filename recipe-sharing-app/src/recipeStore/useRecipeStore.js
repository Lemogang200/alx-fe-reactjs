import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],

  // ⭐ FAVORITES
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

  // ⭐ RECOMMENDATIONS
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
    setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
}));

export default useRecipeStore;