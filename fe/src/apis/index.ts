import axios, { type AxiosError } from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
});

export { api };
export { AxiosError as NetworkError };
