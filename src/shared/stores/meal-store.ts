import { create } from "zustand";
import { devtools } from "zustand/middleware";
import {
  IMeal,
  IMealRecipe,
} from "@/shared/interfaces/meal.interface";

export const useMealStore = create<IMealRecipe>()(
  devtools((set) => ({
    meal: {
      idMeal: 0,
      strMeal: "",
      strCategory: "",
      strArea: "",
      strMealThumb: "",
      strInstructions: "",
      strIngredient: [],
      strMeasure: [],
      strYoutube: "",
      strTags: "",
    },
    setMeal: (val) => {
      set({
        meal: {
          idMeal: val.idMeal,
          strMeal: val.strMeal,
          strCategory: val.strCategory,
          strArea: val.strArea,
          strMealThumb: val.strMealThumb,
          strInstructions: val.strInstructions,
          strYoutube: val.strYoutube,
          strTags: val.strTags,
          strIngredient: Array.from(
            { length: 20 },
            (_, i) =>
              val[`strIngredient${i + 1}` as keyof IMeal] ??
              "",
          ).filter(Boolean),
          strMeasure: Array.from(
            { length: 20 },
            (_, i) =>
              val[`strMeasure${i + 1}` as keyof IMeal] ??
              "",
          ).filter(Boolean),
        },
      });
    },
  })),
);
