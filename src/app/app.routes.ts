import { Routes } from '@angular/router';
import { LunchComponent } from './lunch/lunch.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { LunchDefaultComponent } from './lunch/lunch-default/lunch-default.component';
import { LunchDetailsComponent } from './lunch/lunch-details/lunch-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/lunches', pathMatch: 'full' },
  {
    path: 'lunches',
    component: LunchComponent,
    children: [
      { path: '', component: LunchDefaultComponent },
      { path: ':id', component: LunchDetailsComponent },
    ],
  },
  { path: 'ingredients', component: IngredientsComponent },
];
