import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IIngredients } from "@/shared/interfaces/ingredient.interface";

export const useIngredientsStore = create(
  devtools<IIngredients>((set) => ({
    ingredients: [],
    setIngredients: (val) => {
      set({ ingredients: val });
    },
  })),
);
