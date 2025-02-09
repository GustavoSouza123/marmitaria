import { Component, Input } from '@angular/core';
import { Lunch } from '../../lunch.model';
import { LunchService } from '../../lunch.service';

@Component({
  selector: 'app-lunch-item',
  standalone: true,
  imports: [],
  templateUrl: './lunch-item.component.html',
  styleUrl: './lunch-item.component.css',
})
export class LunchItemComponent {
  @Input() lunch!: Lunch;
  // @Output() lunchClicked = new EventEmitter<void>();

  constructor(private lunchService: LunchService) {}

  onClicked() {
    // this.lunchClicked.emit();
    this.lunchService.lunchSelected.emit(this.lunch);
  }
}
