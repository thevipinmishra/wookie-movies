import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://wookie.codesubmit.io/",
  headers: {
    Authorization: "Bearer Wookie2019",
  },
});
