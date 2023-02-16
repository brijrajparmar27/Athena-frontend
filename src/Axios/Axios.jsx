import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:4000/api",
  baseURL: "https://athena-production-f7e4.up.railway.app/api",
});

export default API;
