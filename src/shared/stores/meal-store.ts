import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IMealRecept } from "@/shared/interfaces/meal.interface";

export const useMealStore = create(
  devtools<IMealRecept>((set) => ({
    MealRecept: {
      idMeal: 0,
      strMeal: "",
      strCategory: "",
      strArea: "",
      strMealThumb: "",
      strInstructions: "",
      strIngredient: [],
      strMeasure: [],
      strYoutube: "",
    },
    setMealRecept: (val) => {
      set(() => ({
        MealRecept: val,
      }));
    },
  })),
);
