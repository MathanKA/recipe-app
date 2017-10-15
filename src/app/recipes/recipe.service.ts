import { Subject } from 'rxjs/Subject';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();


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

  constructor(private slService: ShoppingListService){ }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngToSL(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }


}
