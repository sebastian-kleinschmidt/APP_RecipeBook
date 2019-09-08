import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
  private ingredients: Ingredient[] = [new Ingredient('Tomato', 10), new Ingredient('Potatoe', 15)];
  ingredientEmitter = new EventEmitter<Ingredient[]>();

  getIngredientList(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientEmitter.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientEmitter.emit(this.ingredients.slice());
  }
}
