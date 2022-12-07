import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPage, postPet } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
  shelterPets: [],
  pet: null,
};

export const fetchShelterPets = createAsyncThunk(
  "shelterPets/fetchPets",
  async ({ id, limit, offset }, { dispatch }) => {
    dispatch(setLoading(true));
    const res = await getPage(`/pets/shelter/${id}`, limit, offset);
    dispatch(setShelterPets(res));
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

export const updatePet = createAsyncThunk(
  "shelterPets/putPet",
  async ({ id, body }, { dispatch }) => {
    dispatch(setLoading(true));
    const res = await postPet(`/pets/${id}`, body);
    dispatch(putPet(res));
    dispatch(setLoading(false));
  }
);

export const deletePet = createAsyncThunk(
  "shelterPets/destroyPet",
  async ({ id }, { dispatch }) => {
    dispatch(setLoading(true));
    const res = await postPet(`/pets/${id}`);
    dispatch(destroyPet(res));
    dispatch(setLoading(false));
  }
);

export const petSlice = createSlice({
  name: "pet",
  initialState,
  reducers: {
    setShelterPets: (state, action) => {
      state.shelterPets = action.payload;
    },
    addPet: (state, action) => {
      state.pet = action.payload;
      state.shelterPets.push(action.payload);
    },
    putPet: (state, action) => {
      state.pet = action.payload;
    },
    destroyPet: (state, action) => {
      state.pet = action.payload;
    },
  },
});

export const { setPet, addPet, putPet, destroyPet } = petSlice.actions;
export default petSlice.reducer;
