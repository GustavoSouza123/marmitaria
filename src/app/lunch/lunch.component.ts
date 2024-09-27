import { Component } from '@angular/core';
import { LunchListComponent } from './lunch-list/lunch-list.component';
import { LunchDetailsComponent } from './lunch-details/lunch-details.component';

@Component({
  selector: 'app-lunch',
  standalone: true,
  imports: [LunchListComponent, LunchDetailsComponent],
  templateUrl: './lunch.component.html',
  styleUrl: './lunch.component.css',
})
export class LunchComponent {}
