export interface ICategory {
  idCategory: number;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface ICategories {
  categories: ICategory[];
  setCategories: (val: ICategory[]) => void;
  isLoading: boolean;
  setLoading: (val: boolean) => void;
}
