import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPage } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
  pets: [],
};

export const fetchPets = createAsyncThunk(
  "pets/fetchPets",
  async ({ limit, offset, user }, { dispatch }) => {
    dispatch(setLoading(true));
    if (!user) {
      const res = await getPage("/pets", limit, offset);
      dispatch(setPets(res));
    } else {
      const res = await getPage("/pets/favorite/pets", limit, offset);
      console.log("res: ", res)
      dispatch(setPets(res));
    }
    dispatch(setLoading(false));
  }
);


export const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    setPets: (state, action) => {
      state.pets = action.payload;
    }
  },
});

export const { setPets } = petsSlice.actions;
export default petsSlice.reducer;