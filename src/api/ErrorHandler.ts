import axios from "axios";

const ErrorHandler = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    console.error("error message: ", error.message);
    return error.message;
  }
  console.error("unexpected error: ", error);
  return "An unexpected error occurred";
};

export { ErrorHandler };
