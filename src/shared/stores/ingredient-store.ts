import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IIngredients } from "@/shared/interfaces/ingredient.interface";

export const useIngredientsStore = create<IIngredients>()(
  devtools((set) => ({
    ingredients: [],
    setIngredients: async (val) => {
      set({ ingredients: val });
    },
  })),
);
