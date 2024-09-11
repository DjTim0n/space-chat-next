import axios from "axios";

export const baseUrl = "http://localhost:3000/";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "content-type": "application/json",
  },
});

export default api;
