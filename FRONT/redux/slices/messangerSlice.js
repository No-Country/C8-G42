import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "./uiSlice";
import { getPage, post } from "../api";

const initialState = {
  chats: {},
  newMessage: false,
};

export const sendMessage = createAsyncThunk(
  "chats/sendMessage",
  async ({ userId, shelterId, modifiedBy, text }, { dispatch }) => {
    dispatch(setLoading(true));
    const res = await post("/messages", {
      userId,
      shelterId,
      modifiedBy,
      text,
    });
    dispatch(addMessage(res.data));
    dispatch(setLoading(false));
    return res;
  }
);

export const fetchChat = createAsyncThunk(
  "chat/fetchChat",
  async ({ limit, offset, userId, shelterId }, { dispatch }) => {
    dispatch(setLoading(true));
    const res = await getPage(
      `/messages/?&userId=${userId}&shelterId=${shelterId}`,
      limit, offset
    );
    if (res.length > 0) {
      dispatch(setChat(res));
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
    setNewMessage: (state, action) => {
      const chatId = `${action.payload.shelterId}${action.payload.userId}`;
      state.newMessage = chatId;
    },
  },
});

export const { setChat, addMessage, setNewMessage } = messengerSlice.actions;
export default messengerSlice.reducer;
