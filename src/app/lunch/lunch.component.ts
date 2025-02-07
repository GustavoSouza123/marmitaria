import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LunchListComponent } from './lunch-list/lunch-list.component';
import { LunchDetailsComponent } from './lunch-details/lunch-details.component';
import { Lunch } from './lunch.model';
import { LunchService } from './lunch.service';

@Component({
  selector: 'app-lunch',
  standalone: true,
  imports: [CommonModule, LunchListComponent, LunchDetailsComponent],
  templateUrl: './lunch.component.html',
  styleUrl: './lunch.component.css',
  providers: [LunchService],
})
export class LunchComponent {
  selectedLunch!: Lunch;

  constructor() {}
}
