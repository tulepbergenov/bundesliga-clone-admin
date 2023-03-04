import { getToken } from "@/utilities";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
