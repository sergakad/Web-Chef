import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IMeals } from "@/shared/interfaces/meal.interface";

export const useLikeMealsStore = create(
  devtools<IMeals>((set) => ({
    meals: [],
    setMeals: (val) => {
      set((state) => ({
        ...state,
        meals: [...state.meals, ...val],
      }));
    },
    deleteMeal: (idMeal) => {
      set((state) => ({
        meals: state.meals.filter(
          (meal) => meal.idMeal !== idMeal,
        ),
      }));
    },
    isLoading: true,
    setLoading: (val) => {
      set({ isLoading: val });
    },
  })),
);
