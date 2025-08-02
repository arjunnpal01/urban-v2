import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3001/api/v1",
});

apiClient.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default apiClient;
