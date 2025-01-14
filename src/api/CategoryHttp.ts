import { ICategories } from "@/shared/interfaces/category.interface";
import { ErrorHandler } from "./ErrorHandler";
import { $api } from ".";

const GetCategories = async (): Promise<
  ICategories | string
> => {
  try {
    const { data, status } = await $api.get<ICategories>(
      "categories.php",
      {
        headers: { Accept: "application/json" },
      },
    );
    // console.log(JSON.stringify(data.categories, null, 4));
    // console.log("response status: ", status);
    return data.categories;
  } catch (error) {
    return ErrorHandler(error);
  }
};

export { GetCategories };
