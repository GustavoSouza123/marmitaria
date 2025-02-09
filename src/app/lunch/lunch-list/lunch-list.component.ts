import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LunchItemComponent } from './lunch-item/lunch-item.component';
import { Lunch } from '../lunch.model';
import { LunchService } from '../lunch.service';

@Component({
  selector: 'app-lunch-list',
  standalone: true,
  imports: [CommonModule, LunchItemComponent],
  templateUrl: './lunch-list.component.html',
  styleUrl: './lunch-list.component.css',
})
export class LunchListComponent implements OnInit {
	lunches?: Lunch[];

  // @Output() lunchSelected = new EventEmitter<Lunch>();

	constructor(private lunchService: LunchService) {}

	ngOnInit(): void {
		this.lunches = this.lunchService.getLunches();
	}

  // onLunchSelected(lunch: Lunch) {
  //   this.lunchSelected.emit(lunch);
  // }
}
