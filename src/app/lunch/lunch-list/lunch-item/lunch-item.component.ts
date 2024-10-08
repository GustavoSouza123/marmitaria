import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lunch } from '../../lunch.model';

@Component({
  selector: 'app-lunch-item',
  standalone: true,
  imports: [],
  templateUrl: './lunch-item.component.html',
  styleUrl: './lunch-item.component.css',
})
export class LunchItemComponent {
  @Input() lunch!: Lunch;
  @Output() lunchClicked = new EventEmitter<void>();

  onClicked() {
    this.lunchClicked.emit();
  }
}
