import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const token = localStorage.getItem("token");

const headers = {
  accept: "/",
  "Content-Type": "application/json",
  // Authorization: `Bearer ${
  //   token ? token : localStorage.getItem("token")
  // }`,
};

if (token) {
  headers.Authorization = `Bearer ${token}`;
}

const instance = () => {
  return axios.create({
    baseURL: `${API_URL}`,
    headers,
  });
};
export default instance;
