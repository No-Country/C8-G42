import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const requestSlice = createSlice({
  name: "requests",
  initialState: [],
  reducers: {
    setRequest: (state, action) => {
      return action.payload;
    },
  },
});

export const getRequestThunk = () => (dispatch) => {
  const token = localStorage.getItem("token");
  return axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/requests`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      dispatch(setRequest(res.data.data.requests));
    });
};

export const { setRequest } = requestSlice.actions;

export default requestSlice.reducer;
