import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPage } from "../api";
import { setLoading } from "./uiSlice";
import instance from "../instance";

const initialState = {
};

export const sendMessage = createAsyncThunk(
  "chats/sendMessage",
  async({userId, shelterId, modifiedBy, text, isOpen}, { dispatch }) => {
    dispatch(setLoading(true));
    console.log({userId, shelterId, modifiedBy, text});
    const res = await instance().post("/messages", {
      userId, shelterId, modifiedBy, text
    });
    dispatch(addMessage(res.data));
    dispatch(setLoading(false));
  }
)

export const fetchChats = createAsyncThunk(
  "chats/fetchChats",
  async ({ limit, offset, userId, shelterId }, { dispatch }) => {
    dispatch(setLoading(true));
    const res = await instance().get(
      `/messages?limit=${limit}&offset=${offset}&userId=${userId}&shelterId=${shelterId}`
    );
    if (res.data.length > 0) {
      dispatch(setChat(res.data));
    } else {
      dispatch(setChat([
        {
          "id": 0,
          "userId": userId,
          "shelterId": shelterId,
          "text": "En qué lo podemos ayudar?",
          "modifiedBy": "shelterOwner"
        }
      ]))
    }
    dispatch(setLoading(false));
  }
);

export const messengerSlice = createSlice({
  name: "messenger",
  initialState,
  reducers: {
    setChat: (state, action) => {
      state[action.payload[0].shelterId] = action.payload;
    },
    addMessage: (state, action) => {
      state[action.payload.shelterId].push(action.payload)
    }
  },
});

export const { setChat, addMessage } = messengerSlice.actions;
export default messengerSlice.reducer;
