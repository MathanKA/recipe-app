import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';


export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();


  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe(
      'Recipe title',
      'Recipe desc', 'https://hips.hearstapps.com/esq.h-cdn.co/assets/cm/15/05/54cd70dad7914_-_esq-chili-recipe-0313-de.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Fries', 20)
      ]),
    new Recipe(
      'Recipe title',
      'Recipe desc', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('meat', 3)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
