import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IMeals } from "@/shared/interfaces/meal.interface";

export const useLikeMealsStore = create(
  devtools<IMeals>((set) => ({
    meals: JSON.parse(
      localStorage.getItem("likeMeals") || "[]",
    ),
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
  })),
);
