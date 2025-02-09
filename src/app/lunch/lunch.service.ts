import { EventEmitter } from '@angular/core';
import { Lunch } from './lunch.model';

export class LunchService {
	lunchSelected = new EventEmitter<Lunch>();

  private lunches: Lunch[] = [
    new Lunch(
      'Churrasco',
      'Churrasco de picanha',
      'https://irp.cdn-website.com/33406c6e/dms3rep/multi/picanha-aa0c51c6.jpg'
    ),
    new Lunch(
      'Lasanha',
      'Lasanha com bolonhesa de calabresa',
      'https://vitarella.com.br/wp-content/uploads/2020/12/08_LASANHA_FINAL-1-min.jpg'
    ),
    new Lunch(
      'Feijoada',
      'Feijoada com carnes de porco e linguiça',
      'https://assets.unileversolutions.com/recipes-v2/229468.jpg'
    ),
  ];

  getLunches() {
    return this.lunches.slice();
  }
}
