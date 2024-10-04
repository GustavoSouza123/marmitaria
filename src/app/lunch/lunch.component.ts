import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LunchListComponent } from './lunch-list/lunch-list.component';
import { LunchDetailsComponent } from './lunch-details/lunch-details.component';
import { Lunch } from './lunch.model';

@Component({
  selector: 'app-lunch',
  standalone: true,
  imports: [CommonModule, LunchListComponent, LunchDetailsComponent],
  templateUrl: './lunch.component.html',
  styleUrl: './lunch.component.css',
})
export class LunchComponent {
  selectedLunch!: Lunch;
}
