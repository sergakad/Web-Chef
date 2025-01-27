import {
  IMeals,
  IMealRecipe,
  ISearchMeals,
} from "@/shared/interfaces/meal.interface";
import { ErrorHandler } from "./ErrorHandler";
import { $api } from ".";

const GetCategoryMeals = async (
  category: string,
): Promise<IMeals | string> => {
  try {
    const { data } = await $api.get<IMeals>(
      `filter.php?c=${category}`,
      {
        headers: { Accept: "application/json" },
      },
    );
    // console.log(JSON.stringify(data.meals, null, 4));
    // console.log("response status: ", status);
    return data.meals;
  } catch (error) {
    return ErrorHandler(error);
  }
};

const GetMeal = async (
  id: number,
): Promise<IMealRecipe | string> => {
  try {
    const { data } = await $api.get<IMealRecipe>(
      `lookup.php?i=${id}`,
      {
        headers: { Accept: "application/json" },
      },
    );
    // console.log(JSON.stringify(data.meals[0], null, 4));
    // console.log("response status: ", status);
    return data.meals[0];
  } catch (error) {
    return ErrorHandler(error);
  }
};

const SearchMealsByName = async (
  mealName: string,
): Promise<ISearchMeals | string> => {
  try {
    const { data } = await $api.get<ISearchMeals>(
      `search.php?s=${mealName}`,
      {
        headers: { Accept: "application/json" },
      },
    );
    // console.log(JSON.stringify(data, null, 4));
    // console.log("response status: ", status);
    return data.meals;
  } catch (error) {
    return ErrorHandler(error);
  }
};

const SearchMealsByIngredient = async (
  ingredientName: string,
): Promise<ISearchMeals | string> => {
  try {
    const { data } = await $api.get<ISearchMeals>(
      `filter.php?i=${ingredientName}`,
      {
        headers: { Accept: "application/json" },
      },
    );
    // console.log(JSON.stringify(data, null, 4));
    // console.log("response status: ", status);
    return data.meals;
  } catch (error) {
    return ErrorHandler(error);
  }
};

export {
  GetCategoryMeals,
  GetMeal,
  SearchMealsByName,
  SearchMealsByIngredient,
};
