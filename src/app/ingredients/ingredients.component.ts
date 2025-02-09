import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientEditComponent } from './ingredient-edit/ingredient-edit.component';
import { Ingredient } from '../shared/ingredient.model';
import { IngredientsService } from './ingredients.service';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [CommonModule, IngredientEditComponent],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.css',
})
export class IngredientsComponent implements OnInit {
  ingredients?: Ingredient[];

  constructor(private ingredientService: IngredientsService) {}

  ngOnInit(): void {
    this.ingredients = this.ingredientService.getIngredients();
  }

  // onIngredientAdded(ingredient: Ingredient) {
  //   this.ingredientList.push(ingredient);
  // }
}
