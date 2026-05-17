import axios from "axios";
export const apiURL = "http://localhost:3000";

export const axiosInstance = axios.create({
  baseURL:
    "https://restaurant-pos-inven-git-d5c5cb-engmohamedali409-5913s-projects.vercel.app/",
});
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
