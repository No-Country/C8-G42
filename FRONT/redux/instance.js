import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const instance = () => {
  return axios.create({
    baseURL: `${API_URL}`,
    headers: {
      accept: "/",
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        token ? token : localStorage.getItem("token")
      }`,
    },
  });
};
export default instance;
