import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ICategories } from "@/shared/interfaces/category.interface";

export const useCategoriesStore = create(
  devtools<ICategories>((set) => ({
    categories: [],
    setCategories: (val) => {
      set({ categories: val });
    },
    isLoading: true,
    setLoading: (val) => {
      set({ isLoading: val });
    },
  })),
);
