import { IMeals } from "@/shared/interfaces/meal.interface";
import { ErrorHandler } from "./ErrorHandler";
import { $api } from ".";

const GetRandomMeal = async (): Promise<
  IMeals | string
> => {
  try {
    const { data, status } = await $api.get<IMeals>(
      "random.php",
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

export { GetRandomMeal };
