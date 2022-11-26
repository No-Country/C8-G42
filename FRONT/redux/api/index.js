import axios from "axios";

export const getUser = () => {
  return axios
    .get("http://localhost:5000/api/v1/users")
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}