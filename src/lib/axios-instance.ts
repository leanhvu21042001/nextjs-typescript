import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return error;
  }
);

export default axiosInstance;
