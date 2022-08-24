import { Recipe } from "../types/Recipe";

export declare global {
  namespace ReactNavigation {
      interface RootParamList {
          Home: undefined;
          RecipeList: { recipe: Recipe[] };
          RecipeDetails: { recipeSelected: Recipe, isCompleteRecipe: boolean };
      }
  }
}
