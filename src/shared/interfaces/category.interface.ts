export interface ICategory {
  idCategory: number;
  strCategory: string;
  strCategoryDescription: string;
}

export interface ICategories {
  categories: ICategory[];
  setCategories: (val: ICategory[]) => void;
}

export interface ICategoriesImage {
  id: number;
  backgroundImage: string;
}
