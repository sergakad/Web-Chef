import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IMeals } from "@/shared/interfaces/meal.interface";

export const useRandomMealsStore = create(
  devtools<IMeals>((set) => ({
    meals: [],
    setMeals: (val) => {
      set({ meals: val });
    },
    isLoading: true,
    setLoading: (val) => {
      set({ isLoading: val });
    },
  })),
);
