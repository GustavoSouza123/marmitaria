import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LunchListComponent } from './lunch-list/lunch-list.component';
import { LunchService } from './lunch.service';
import { Subscription } from 'rxjs';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lunch',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LunchListComponent],
  templateUrl: './lunch.component.html',
  styleUrl: './lunch.component.css',
  providers: [LunchService],
})
export class LunchComponent implements OnInit, OnDestroy {
  // selectedLunch!: Lunch;
  subscription: Subscription = new Subscription();

  constructor(private lunchService: LunchService) {}

  ngOnInit(): void {
    // this.subscription = this.lunchService.lunchSelected.subscribe(
    //   (selectedLunch: Lunch) => {
    //     this.selectedLunch = selectedLunch;
    //   }
    // );
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe(); // avoid memory leaks
  }
}
