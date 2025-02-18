import { IMeal } from "@/shared/interfaces/meal.interface";
import { ErrorHandler } from "./ErrorHandler";
import { $api } from ".";

const GetRandomMeal = async (): Promise<
  IMeal | string
> => {
  try {
    const { data } = await $api.get<IMeal>(
      "random.php",
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

export { GetRandomMeal };
