import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

@Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter();

  recipes: Recipe[] = [new Recipe('Best Recipe Ever','Just make it tasty','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
  new Recipe('Best Recipe Ever','Just make it tasty','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg')];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
