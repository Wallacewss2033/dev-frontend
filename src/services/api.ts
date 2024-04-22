import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
});

api.interceptors.request.use(function (config) {
  config.headers.Accept = "application/json";
  config.headers["Content-Type"] = "application/json";

  return config;
});


export default api;
