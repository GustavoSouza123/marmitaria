import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lunch } from '../lunch.model';
import { DropdownDirective } from '../../shared/dropdown.directive';
import { LunchService } from '../lunch.service';

@Component({
  selector: 'app-lunch-details',
  standalone: true,
  imports: [CommonModule, DropdownDirective],
  templateUrl: './lunch-details.component.html',
  styleUrl: './lunch-details.component.css',
})
export class LunchDetailsComponent {
  @Input() lunch!: Lunch;

  constructor(private lunchService: LunchService) {}

  addToIngredientList() {
    this.lunchService.addIngretientsToList(this.lunch.ingredients);
  }
}
