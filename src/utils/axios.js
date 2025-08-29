import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-backend-tsa6.onrender.com/api",
});
export default api;
