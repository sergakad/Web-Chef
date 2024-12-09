export interface IMeal {
  idMeal: number;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
  strInstructions?: string;
  strIngredient?: [];
  strMeasure?: [];
  strYoutube?: string;
}

export interface IMealRecept {
  MealRecept: IMeal;
  setMealRecept: (val:IMeal)=>void;
}

export interface IMeals {
  meals: IMeal[];
  setMeals: (val: IMeal[]) => void;
  isLoading: boolean;
  setLoading: (val: boolean) => void;
}
