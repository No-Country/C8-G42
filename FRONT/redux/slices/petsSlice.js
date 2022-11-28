import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPage } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
  pets: [],
}

export const fetchPets = createAsyncThunk(
  "pets/fetchPets",
  async ({limit, offset}, { dispatch }) => {
    console.log({limit, offset})
    dispatch(setLoading(true));
    const res = await getPage("/pets", limit, offset);
    dispatch(setPets(res));
    dispatch(setLoading(false));
  }
)

export const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    setPets: (state, action) => {
      state.pets = action.payload
    }
  },
})

export const { setPets } = petsSlice.actions;
export default petsSlice.reducer;