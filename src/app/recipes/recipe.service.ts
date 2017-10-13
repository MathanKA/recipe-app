import { Recipe } from './recipe.model';


export class RecipeService {
  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Recipe title', 'Recipe desc', 'https://hips.hearstapps.com/esq.h-cdn.co/assets/cm/15/05/54cd70dad7914_-_esq-chili-recipe-0313-de.jpg'),
    new Recipe('Recipe title', 'Recipe desc', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
