import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class IngredientsService {
  ingredientAdded = new EventEmitter<Ingredient>();

  private ingredients: Ingredient[] = [
    new Ingredient('Carne', 1),
    new Ingredient('Arroz', 2),
    new Ingredient('Couve', 2),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
}
