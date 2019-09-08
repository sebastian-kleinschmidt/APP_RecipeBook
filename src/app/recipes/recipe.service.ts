import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [new Recipe('Best Recipe Ever',
  'Just make it tasty','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
  [new Ingredient('Cocumba', 3), new Ingredient('Tomatos', 2)]),
  new Recipe('Even Better Recipe',
  'Just make it tasty',
  'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
[new Ingredient('eggs', 5), new Ingredient('bread', 7)])];

constructor(private shoppingListService: ShoppingListService) {

}

  getRecipe() {
    return this.recipes.slice(); //return just a copy
  }

  addIngredientsToShoopingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }


}
