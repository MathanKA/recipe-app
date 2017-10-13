import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from './../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];

  // recipes: Recipe[] = [
  //   // tslint:disable-next-line:max-line-length
  //   new Recipe('Recipe title', 'Recipe desc', 'https://hips.hearstapps.com/esq.h-cdn.co/assets/cm/15/05/54cd70dad7914_-_esq-chili-recipe-0313-de.jpg'),
  //   new Recipe('Recipe title', 'Recipe desc', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
  // ];


  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
