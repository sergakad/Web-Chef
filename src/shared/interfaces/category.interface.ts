export interface ICategory {
  id: number;
  name: string;
  image: string;
  description: string;
}

export interface ICategories {
  categories: ICategory[];
  setCategories: (val: ICategory[]) => void;
  isLoading: boolean;
  setLoading: (val: boolean) => void;
}
