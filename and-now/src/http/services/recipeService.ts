import { recipesMockResolver } from "../../mocks/recipesMockResolver";
import { RequestItem } from "../types/RequestItem";

export const recipeService = {
  searchRecipes: (itens: RequestItem[]) => {
    return new Promise(resolve => {setTimeout(resolve, 2000)}).then(() => recipesMockResolver() );
  }
}
