import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IMealRecipe } from "@/shared/interfaces/meal.interface";

export const useMealStore = create(
  devtools<IMealRecipe>((set) => ({
    meals: {
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
    setMeals: (val) => {
      set({
        meals: val,
      });
    },
  })),
);
// export const useMealStore = create(
//   devtools<IMealRecipe>((set) => ({
//     meals: {
//       idMeal: 0,
//       strMeal: "",
//       strCategory: "",
//       strArea: "",
//       strMealThumb: "",
//       strInstructions: "",
//       strIngredient: [],
//       strMeasure: [],
//       strYoutube: "",
//     },
//     setMeals: (val) => {
//       set({
//         meals: val,
//       });
//     },
//   })),
// );
