import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [new Ingredient('Tomato', 10), new Ingredient('Potatoe', 15)];

  constructor() { }

  addIngredient(newIngridient: Ingredient) {
    this.ingredients.push(newIngridient);
  }

  ngOnInit() {
  }

}
