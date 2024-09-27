import { Component } from '@angular/core';
import { IngredientsEditComponent } from "./ingredients-edit/ingredients-edit.component";

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [IngredientsEditComponent],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.css',
})
export class IngredientsComponent {}
