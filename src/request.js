import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8000/api/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${token}`,
  },
});

export default request;
