import {
  ICategoryMouseState,
  ICategories,
} from "@/shared/interfaces/category.interface";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useCategoriesStore = create<ICategories>()(
  devtools((set) => ({
    categories: [],
    setCategories: (val) => {
      set({ categories: val });
    },
  })),
);

export const useCategoryMouseStateStore =
  create<ICategoryMouseState>()(
    devtools((set) => ({
      categoryMouseState: "leave",
      setCategoryMouseState: (val) => {
        set({ categoryMouseState: val });
      },
    })),
  );
