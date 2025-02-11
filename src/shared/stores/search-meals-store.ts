import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ISearchMeals } from "@/shared/interfaces/meal.interface";

export const useSearchMealsStore = create<ISearchMeals>()(
  devtools((set) => ({
    meals: [],
    setMeals: (val) => {
      set({
        meals: val,
      });
    },
    searchMealsName: "",
    setSearchMealsName: (val) => {
      set({ searchMealsName: val });
    },
  })),
);
