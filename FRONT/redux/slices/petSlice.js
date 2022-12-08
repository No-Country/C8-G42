import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPage, postPet } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
  shelterPets: [],
  pet: null,
};

export const fetchPet = createAsyncThunk(
  "shelterPets/fetchPets",
  async ({ limit, offset }, { dispatch }) => {
    dispatch(setLoading(true));
    const res = await getPage("/pets", limit, offset);
    dispatch(setShelterPets(res));
    dispatch(setLoading(false));
  }
  );
  
export const fetchShelterPets = createAsyncThunk(
  "shelterPets/fetchPets",
  async ({ id, limit, offset }, { dispatch }) => {
    dispatch(setLoading(true));
    const res = await getPage(`/pets/shelter/${id}`, limit, offset);
    dispatch(setShelterPets(res.data.pets));
    dispatch(setLoading(false));
  }
);

export const addNewPet = createAsyncThunk(
  "shelterPets/addPet",
  async ({ body }, { dispatch }) => {
    dispatch(setLoading(true));
    const res = await postPet("/pets", body);
    dispatch(addPet(res));
    dispatch(setLoading(false));
  }
);

export const petSlice = createSlice({
  name: "pet",
  initialState,
  reducers: {
    setShelterPets: (state, action) => {
      console.log("action.payload", action.payload)
      state.shelterPets = action.payload;
    },
    addPet: (state, action) => {
      state.shelterPets.push(action.payload);
    },
  },
});

export const { addPet, setShelterPets } = petSlice.actions;
export default petSlice.reducer;
