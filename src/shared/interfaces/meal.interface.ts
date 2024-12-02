export interface IMeal {
  idMeal: number;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
  strInstructions?: string;
}

export interface IMeals {
  meals: IMeal[];
  setMeals: (val: IMeal[]) => void;
  isLoading: boolean;
  setLoading: (val: boolean) => void;
}
