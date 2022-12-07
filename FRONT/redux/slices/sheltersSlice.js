import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPage } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
  shelters: [],
  shelter:null
}

export const fetchShelters = createAsyncThunk(
  "shelters/fetchShelters",
  async ({limit, offset}, { dispatch }) => {
    dispatch(setLoading(true));
    const res = await getPage("/shelters", limit, offset);
    dispatch(setShelters(res));
    dispatch(setLoading(false));
  }
)
export const fetchShelter = createAsyncThunk(
  "user/fetchShelter",
  async ({ email }, { dispatch }) => {
    let res = await getPage(`/users/${email}`);
    dispatch(setUser(res));
    dispatch(setLoading(false));
  }
);

export const sheltersSlice = createSlice({
  name: "shelters",
  initialState,
  reducers: {
    setShelters: (state, action) => {
      state.shelters = action.payload
    },
    setShelter:(state, action)=>{
      state.shelter = action.payload
    }
  },
})

export const { setShelters } = sheltersSlice.actions;
export default sheltersSlice.reducer;