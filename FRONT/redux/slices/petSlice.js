import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getPage, postPet } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
  shelterPets:[],
  pet: null
}

export const fetchPet = createAsyncThunk(
  "shelterPets/fetchPets",
  async ({limit, offset}, { dispatch }) => {
    dispatch(setLoading(true));
    const res = await getPage("/pets", limit, offset);
    dispatch(setShelterPets(res));
    dispatch(setLoading(false));
  }

)

export const addNewPet = createAsyncThunk(
  "shelterPets/addPet",
  async ({body},{dispatch }) => {
    dispatch(setLoading(true));
    const res = await postPet("/pets", body);
    dispatch(addPet(res));
    dispatch(setLoading(false));
  }
)

export const petSlice = createSlice({
  name: "pet",
  initialState,
  reducers: {
    setShelterPets: (state, action) => {
      state.shelterPets = action.payload
    },
    addPet: (state, action) => {
        state.shelterPets.push(action.payload)}
  },
})

export const { setPet, addPet } = petSlice.actions;
export default petSlice.reducer;