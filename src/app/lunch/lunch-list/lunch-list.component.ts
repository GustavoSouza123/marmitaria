import { Component } from '@angular/core';
import { LunchItemComponent } from './lunch-item/lunch-item.component';

@Component({
  selector: 'app-lunch-list',
  standalone: true,
  imports: [LunchItemComponent],
  templateUrl: './lunch-list.component.html',
  styleUrl: './lunch-list.component.css',
})
export class LunchListComponent {}
