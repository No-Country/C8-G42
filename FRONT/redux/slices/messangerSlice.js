import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "./uiSlice";
import instance from "../instance";

const initialState = {
  chats: {},
  isUpdated: false,
};

export const sendMessage = createAsyncThunk(
  "chats/sendMessage",
  async ({ userId, shelterId, modifiedBy, text }, { dispatch }) => {
    dispatch(setLoading(true));
    const res = await instance().post("/messages", {
      userId,
      shelterId,
      modifiedBy,
      text,
    });
    dispatch(addMessage(res.data));
    dispatch(setLoading(false));
  }
);

export const fetchChat = createAsyncThunk(
  "chat/fetchChat",
  async ({ limit, offset, userId, shelterId }, { dispatch }) => {
    dispatch(setLoading(true));
    const res = await instance().get(
      `/messages/?limit=${limit}&offset=${offset}&userId=${userId}&shelterId=${shelterId}`
    );
    if (res.data.length > 0) {
      dispatch(setChat(res.data));
    } else {
      dispatch(
        setChat([
          {
            id: 0,
            userId: userId,
            shelterId: shelterId,
            text: "En qué lo podemos ayudar?",
            modifiedBy: "shelterOwner",
          },
        ])
      );
    }
    dispatch(setLoading(false));
  }
);

export const messengerSlice = createSlice({
  name: "messenger",
  initialState,
  reducers: {
    setChat: (state, action) => {
      const chatId = `${action.payload[0].shelterId}${action.payload[0].userId}`;
      state.chats[chatId] = action.payload;
    },
    addMessage: (state, action) => {
      const chatId = `${action.payload.shelterId}${action.payload.userId}`;
      state.chats[chatId].push(action.payload);
    },
  },
});

export const { setChat, addMessage } = messengerSlice.actions;
export default messengerSlice.reducer;
