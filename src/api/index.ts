import axios, { AxiosInstance } from "axios";

const API_KEY: string =
  process.env.NEXT_PUBLIC_API_KEY || "";
const BASE_URL: string =
  process.env.NEXT_PUBLIC_BASE_URL + API_KEY || "";

const $api: AxiosInstance = axios.create({
  // withCredentials: true,
  baseURL: `${BASE_URL}`,
  validateStatus: (status: number) => status <= 6000,
});

export { $api };
