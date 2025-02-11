import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IMeals } from "@/shared/interfaces/meal.interface";

export const useCategoryMealsStore = create<IMeals>()(
  devtools((set) => ({
    meals: [],
    setMeals: (val) => {
      set({
        meals: val,
      });
    },
  })),
);
