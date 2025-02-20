import { Injectable } from '@angular/core';
import { Lunch } from './lunch.model';
import { Ingredient } from '../shared/ingredient.model';
import { IngredientsService } from '../ingredients/ingredients.service';

@Injectable() // to inject the ingredients service into this service
export class LunchService {
  // lunchSelected = new EventEmitter<Lunch>();

  private lunches: Lunch[] = [
    new Lunch(
      1,
      'Churrasco',
      'Churrasco de picanha',
      'https://irp.cdn-website.com/33406c6e/dms3rep/multi/picanha-aa0c51c6.jpg',
      [new Ingredient('Picanha', 4), new Ingredient('Sal', 1)]
    ),
    new Lunch(
      2,
      'Lasanha',
      'Lasanha com bolonhesa de calabresa',
      'https://vitarella.com.br/wp-content/uploads/2020/12/08_LASANHA_FINAL-1-min.jpg',
      [new Ingredient('Salmão', 3), new Ingredient('Sal', 1)]
    ),
    new Lunch(
      3,
      'Feijoada',
      'Feijoada com carnes de porco e linguiça',
      'https://assets.unileversolutions.com/recipes-v2/229468.jpg',
      [new Ingredient('Feijão preto', 3), new Ingredient('Linguiça', 6)]
    ),
  ];

  constructor(private ingredientsService: IngredientsService) {}

  getLunches() {
    return this.lunches.slice();
  }

  getLunch(id: number) {
    return this.lunches.find((lunch) => lunch.id === id) as Lunch;
  }

  addIngretientsToList(ingredients?: Ingredient[]) {
    this.ingredientsService.addIngredients(ingredients);
  }
}
