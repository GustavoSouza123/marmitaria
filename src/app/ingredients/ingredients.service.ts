import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class IngredientsService {
  // ingredientAdded = new EventEmitter<Ingredient>();
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Carne', 1),
    new Ingredient('Arroz', 2),
    new Ingredient('Couve', 2),
  ];

  getIngredients() {
    return this.ingredients.slice(); // the slice method avoids passing a reference of the array
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
