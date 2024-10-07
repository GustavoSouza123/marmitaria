import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientEditComponent } from './ingredient-edit/ingredient-edit.component';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [CommonModule, IngredientEditComponent],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.css',
})
export class IngredientsComponent {
  ingredientList: Ingredient[] = [
    new Ingredient('Carne', 1),
    new Ingredient('Arroz', 2),
    new Ingredient('Couve', 2),
  ];

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredientList.push(ingredient);
  }
}
