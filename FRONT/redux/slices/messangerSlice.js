import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPage } from "../api";
import { setLoading } from "./uiSlice";
import instance from "../instance";

const initialState = {
  chats: [],
};

export const fetchChats = createAsyncThunk(
  "chats/fetchChats",
  async ({ limit, offset, userId, shelterId }, { dispatch }) => {
    dispatch(setLoading(true));
    console.log({ limit, offset, userId, shelterId });
    const res = await instance().get(
      `/messages?limit=${limit}&offset=${offset}&userId=${userId}&shelterId=${shelterId}`
    );
    console.log(res.data)
    dispatch(setChat(res.data));
    dispatch(setLoading(false));
  }
);

export const messengerSlice = createSlice({
  name: "messenger",
  initialState,
  reducers: {
    setChat: (state, action) => {
      state.chats = action.payload;
    },
  },
});

export const { setChat } = messengerSlice.actions;
export default messengerSlice.reducer;
