import { Component, OnInit, Input } from '@angular/core';
import { Recipe} from '../../recipe.model';
import { Output, EventEmitter } from '@angular/core'
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() crecipe: Recipe;
  @Output() recipeSelector: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeSelector.emit();
  }

}
