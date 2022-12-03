import { createSlice } from "@reduxjs/toolkit";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const petsFamilySlice = createSlice({
  name: "petsFamilyFilter",
  initialState: "",
  reducers: {
    setPetsFamilyFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPetsFamilyFilter } = petsFamilySlice.actions;

export default petsFamilySlice.reducer;
