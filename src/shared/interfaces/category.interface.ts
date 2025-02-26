import { TCategoryMouseState } from "@/shared/types/category-mouse-state";

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

export interface ICategoryMouseState {
  categoryMouseState: TCategoryMouseState;
  setCategoryMouseState: (val: TCategoryMouseState) => void;
}
