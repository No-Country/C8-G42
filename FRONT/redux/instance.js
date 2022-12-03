import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;  // Reading .env:   'http://localhost:5000/api/v1/' or 'https://backend.huellitas.ar/'

const instance = () => {
  return axios.create({
    baseURL: `${API_URL}`,
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${localStorage.getItem("token")
      }`,
    },
  });
};
export default instance;
