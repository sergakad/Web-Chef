export interface IMeal {
  idMeal: number;
  strMeal: string;
  strCategory?: string;
  strArea?: string;
  strMealThumb: string;
  strInstructions?: string;
  strIngredient?: [];
  strMeasure?: [];
  strYoutube?: string;
}

export interface IMeals {
  meals: IMeal[];
  setMeals: (val: IMeal[]) => void;
  deleteMeal?: (idMeal: number) => void;
  isLoading: boolean;
  setLoading: (val: boolean) => void;
}

export interface IMealRecipe {
  meals: IMeal;
  setMeals: (val: IMeal) => void;
}
