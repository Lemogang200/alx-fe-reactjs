import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],

  searchTerm: "",
  filteredRecipes: [],

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

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
}));

export default useRecipeStore;