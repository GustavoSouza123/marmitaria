import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lunch } from '../lunch.model';
import { DropdownDirective } from '../../shared/dropdown.directive';
import { LunchService } from '../lunch.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lunch-details',
  standalone: true,
  imports: [CommonModule, DropdownDirective],
  templateUrl: './lunch-details.component.html',
  styleUrl: './lunch-details.component.css',
})
export class LunchDetailsComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  lunch?: Lunch;

  constructor(
    private lunchService: LunchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // get selected lunch from route parameter
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.lunch = this.lunchService.getLunch(+params['id']);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // avoid memory leaks
  }

  addToIngredientList() {
    this.lunchService.addIngretientsToList(this.lunch?.ingredients);
  }
}
