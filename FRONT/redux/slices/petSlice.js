import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPage, postPet, updatePet, deletePet } from "../api";
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

export const putPet = createAsyncThunk(
  "shelterPets/putThePet",
  async ({ id, body }, { dispatch }) => {
    dispatch(setLoading(true));
    const res = await updatePet(`/pets/${id}`, body);
    dispatch(putThePet(res));
    dispatch(setLoading(false));
  }
);

export const destroyPet = createAsyncThunk(
  "shelterPets/destroyThePet",
  async ({ id }, { dispatch }) => {
    dispatch(setLoading(true));
    const res = await deletePet(`/pets/${id}`);
    dispatch(destroyThePet(res));
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
      state.shelterPets.push(action.payload);
    }  ,
    putThePet: (state, action) => {
      state.shelterPets = action.payload;
    },
    destroyThePet: (state, action) => {
      state.shelterPets = action.payload;
    }, 
  },
});

export const { setShelterPet, addPet, putThePet, destroyThePet } = petSlice.actions;
export default petSlice.reducer;
