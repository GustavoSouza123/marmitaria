import { Component, Input } from '@angular/core';
import { Lunch } from '../../lunch.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lunch-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lunch-item.component.html',
  styleUrl: './lunch-item.component.css',
})
export class LunchItemComponent {
  @Input() lunch!: Lunch;
  // @Output() lunchClicked = new EventEmitter<void>();

  constructor() {}

  // onClicked() {
  // 	this.lunchClicked.emit();
  // 	this.lunchService.lunchSelected.emit(this.lunch);
  // }
}
