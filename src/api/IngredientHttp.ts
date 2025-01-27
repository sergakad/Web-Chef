import { IIngredients } from "@/shared/interfaces/ingredient.interface";
import { ErrorHandler } from "./ErrorHandler";
import { $api } from ".";

const GetIngredients = async ():Promise<IIngredients | string> => {try {
  const { data } = await $api.get<IIngredients>(
    "list.php?i=list",
    {
      headers: { Accept: "application/json" },
    },
  );
//   console.log(JSON.stringify(data.meals, null, 4));
//   console.log("response status: ", status);
  return data.meals;
} catch (error) {
  return ErrorHandler(error);
}};


export {GetIngredients}