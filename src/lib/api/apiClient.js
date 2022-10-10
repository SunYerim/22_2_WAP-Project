import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3001", // baseUrl지정
  withCredentials: true, // COOKIE 사옹 가능
});

export default apiClient;
