import { Recipe } from './recipe.model';
import { TouchSequence } from 'selenium-webdriver';

export class RecipeService {
  private recipes: Recipe[] = [new Recipe('Best Recipe Ever','Just make it tasty','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
  new Recipe('Best Recipe Ever','Just make it tasty','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg')];

  getRecipe(){
    return this.recipes.slice(); //return just a copy
  }
}
