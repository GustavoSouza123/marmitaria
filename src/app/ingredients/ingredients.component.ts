import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientEditComponent } from './ingredient-edit/ingredient-edit.component';
import { Ingredient } from '../shared/ingredient.model';
import { IngredientsService } from './ingredients.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [CommonModule, IngredientEditComponent],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.css',
  providers: [],
})
export class IngredientsComponent implements OnInit, OnDestroy {
  ingredients?: Ingredient[];
  subscription: Subscription = new Subscription();

  constructor(private ingredientService: IngredientsService) {}

  ngOnInit(): void {
    this.ingredients = this.ingredientService.getIngredients();
    this.subscription = this.ingredientService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // avoid memory leaks
  }

  // onIngredientAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }
}
