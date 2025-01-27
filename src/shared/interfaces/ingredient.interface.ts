export interface IIngredient {
  idIngredient: number;
  strIngredient: string;
  strDescription: string;
}

export interface IIngredients {
  ingredients: IIngredient[];
  setIngredients: (val: IIngredient[]) => void;
}
