import { Component, Input } from '@angular/core';
import { Lunch } from '../lunch.model';

@Component({
  selector: 'app-lunch-details',
  standalone: true,
  imports: [],
  templateUrl: './lunch-details.component.html',
  styleUrl: './lunch-details.component.css',
})
export class LunchDetailsComponent {
	@Input() lunch!: Lunch;
}
