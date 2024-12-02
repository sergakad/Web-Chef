import axios from "axios";
import { $api } from ".";
import { ICategories } from "@/shared/interfaces/category.interface";

const ErrorHandler = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    console.error("error message: ", error.message);
    return error.message;
  }
  console.error("unexpected error: ", error);
  return "An unexpected error occurred";
};

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
    console.log(JSON.stringify(data.categories, null, 4));
    console.log("response status: ", status);
    return data;
  } catch (error) {
    return ErrorHandler(error);
  }
};

export { GetCategories };
