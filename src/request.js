import axios from "axios";

const request = axios.create({
  baseURL: "https://ghosttalk.pythonanywhere.com/api/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${token}`,
  },
});

export default request;
