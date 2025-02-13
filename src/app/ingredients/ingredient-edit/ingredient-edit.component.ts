import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { IngredientsService } from '../ingredients.service';

@Component({
  selector: 'app-ingredient-edit',
  standalone: true,
  imports: [],
  templateUrl: './ingredient-edit.component.html',
  styleUrl: './ingredient-edit.component.css',
})
export class IngredientEditComponent {
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private ingredientsService: IngredientsService) {}

  addIngredient() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    // this.ingredientAdded.emit(newIngredient);
    this.ingredientsService.addIngredient(newIngredient);
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';
  }
}
