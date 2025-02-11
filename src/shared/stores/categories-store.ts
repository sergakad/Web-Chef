import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ICategories } from "@/shared/interfaces/category.interface";

export const useCategoriesStore = create<ICategories>()(
  devtools((set) => ({
    categories: [],
    setCategories: (val) => {
      set({ categories: val });
    },
  })),
);
