import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IMeals } from "@/shared/interfaces/meal.interface";

export const useLikeMealsStore = create<IMeals>()(
  devtools<IMeals>((set) => ({
    meals: JSON.parse(
      localStorage.getItem("likeMeals") || "[]",
    ),

    setMeals: (meal) => {
      set((state) => {
        const updateMeals = [...state.meals, ...meal];
        localStorage.setItem(
          "likeMeals",
          JSON.stringify(updateMeals),
        );
        return { meals: updateMeals };
      });
    },

    deleteMeal: (idMeal) => {
      set((state) => {
        const updateMeals = state.meals.filter(
          (meal) => meal.idMeal !== idMeal,
        );
        localStorage.setItem(
          "likeMeals",
          JSON.stringify(updateMeals),
        );
        return { meals: updateMeals };
      });
    },
  })),
);
