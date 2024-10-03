import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LunchComponent } from './lunch/lunch.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    LunchComponent,
    IngredientsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  loadedFeature: string = 'lunch';

  handleNavigation(feature: string) {
    this.loadedFeature = feature;
  }
}
