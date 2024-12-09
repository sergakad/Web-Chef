import { IMeals } from "@/shared/interfaces/meal.interface";
import { ErrorHandler } from "./ErrorHandler";
import { $api } from ".";

const GetCategoryMeals = async (category:string): Promise<
  IMeals | string
> => {
  try {
    const { data, status } = await $api.get<IMeals>(
      `filter.php?c=${category}`,
      {
        headers: { Accept: "application/json" },
      },
    );
    console.log(JSON.stringify(data.meals, null, 4));
    console.log("response status: ", status);
    return data.meals;
  } catch (error) {
    return ErrorHandler(error);
  }
};

const GetMeal = async (
  id: number,
): Promise<IMeals | string> => {
  try {
    const { data, status } = await $api.get<IMeals>(
      `lookup.php?i=${id}`,
      {
        headers: { Accept: "application/json" },
      },
    );
    console.log(JSON.stringify(data.meals, null, 4));
    console.log("response status: ", status);
    return data.meals;
  } catch (error) {
    return ErrorHandler(error);
  }
};

export { GetCategoryMeals, GetMeal };
