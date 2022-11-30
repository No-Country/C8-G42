import axios from "axios";
// const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_URL = 'http://localhost:5000/api/v1/';

const token = localStorage.getItem("token");

// const headers = {
//   accept: "/",
//   "Content-Type": "application/json",
//   // Authorization: `Bearer ${
//   //   token ? token : localStorage.getItem("token")
//   // }`,
// };

// if (token) {
//   headers.Authorization = `Bearer ${token}`;
// }

const instance = () => {
  return axios.create({
    baseURL: `${API_URL}`,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")
      }`,
    },
  });
};
export default instance;
