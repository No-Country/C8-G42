import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPage } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
  shelter: null,
}

export const fetchShelter = createAsyncThunk(
  "shelter/fetchShelter",
  async ({id,limit, offset}, { dispatch }) => {
    dispatch(setLoading(true));
    const res = await getPage(`/shelters/${id}`, limit, offset);
    dispatch(setShelter(res));
    dispatch(setLoading(false));
  }
)

export const shelterSlice = createSlice({
  name: "shelter",
  initialState,
  reducers: {
    setShelter: (state, action) => {
      state.shelter = action.payload
    }
  },
})

export const { setShelter } = shelterSlice.actions;
export default shelterSlice.reducer;