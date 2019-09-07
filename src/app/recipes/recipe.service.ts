import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [new Recipe('Best Recipe Ever','Just make it tasty','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
  new Recipe('Even Better Recipe', 'Just make it tasty','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg')];

  getRecipe(){
    return this.recipes.slice(); //return just a copy
  }


}
