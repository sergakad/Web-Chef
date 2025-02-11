import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IMeals } from "@/shared/interfaces/meal.interface";

export const useRandomMealsStore = create<IMeals>()(
  devtools((set) => ({
    meals: [],
    setMeals: (val) => {
      set({ meals: val });
    },
  })),
);
