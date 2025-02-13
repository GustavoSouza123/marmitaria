import { Ingredient } from '../shared/ingredient.model';

export class Lunch {
  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public ingredients: Ingredient[]
  ) {}
}
