import { create } from "zustand";
import { devtools } from "zustand/middleware";
import {
  IMeal,
  IRandomMeals,
} from "@/shared/interfaces/meal.interface";
import { GetRandomMeal } from "@/api/RandomMealHttp";

export const useRandomMealsStore = create<IRandomMeals>()(
  devtools((set) => ({
    randomMeals: [],
    getRandomMeals: async () => {
      const random: IMeal[] = [];
      const randomPromise = Array.from({ length: 5 }, () =>
        GetRandomMeal(),
      );
      const data = await Promise.all(randomPromise);

      data.forEach((el) => {
        if (Array.isArray(el)) {
          const formattedData = el.map((val) => ({
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
                val[
                  `strIngredient${i + 1}` as keyof IMeal
                ] ?? "",
            ).filter(Boolean),
            strMeasure: Array.from(
              { length: 20 },
              (_, i) =>
                val[`strMeasure${i + 1}` as keyof IMeal] ??
                "",
            ).filter(Boolean),
          }));
          random.push(...formattedData);

          set({ randomMeals: random });
        }
      });
    },
    resetRandomMeals: () => {
      set({
        randomMeals: [],
      });
    },
  })),
);
