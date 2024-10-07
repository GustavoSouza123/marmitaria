import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LunchItemComponent } from './lunch-item/lunch-item.component';
import { Lunch } from '../lunch.model';

@Component({
  selector: 'app-lunch-list',
  standalone: true,
  imports: [CommonModule, LunchItemComponent],
  templateUrl: './lunch-list.component.html',
  styleUrl: './lunch-list.component.css',
})
export class LunchListComponent {
  lunches: Lunch[] = [
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

	@Output() lunchSelected = new EventEmitter<Lunch>();

	onLunchSelected(lunch: Lunch) {
		this.lunchSelected.emit(lunch);
	}
}
