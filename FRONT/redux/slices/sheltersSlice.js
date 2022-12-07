import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPage } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
  shelters: [],
  shelter: null,
  chats: [],
};

export const fetchShelter = createAsyncThunk(
  "shelter/fetchShelter",
  async ({ shelterId }, { dispatch }) => {
    dispatch(setLoading(true));
    const res = await getPage(`/shelters/${shelterId}`);
    console.log({ res, shelterId });
    dispatch(setChats(res.chats));
    dispatch(setLoading(false));
  }
);

export const fetchShelters = createAsyncThunk(
  "shelters/fetchShelters",
  async ({ limit, offset }, { dispatch }) => {
    dispatch(setLoading(true));
    const res = await getPage("/shelters", limit, offset);
    dispatch(setShelters(res));
    dispatch(setLoading(false));
  }
);

export const sheltersSlice = createSlice({
  name: "shelters",
  initialState,
  reducers: {
    setShelters: (state, action) => {
      state.shelters = action.payload;
    },
    setShelter: (state, action) => {
      state.shelter = action.payload;
    },
    setChats: (state, action) => {
      state.chats = action.payload;
    },
    addChat: (state, action) => {
      state.chats.push(action.payload);
    },
  },
});

export const { setShelters, setChats } = sheltersSlice.actions;
export default sheltersSlice.reducer;
