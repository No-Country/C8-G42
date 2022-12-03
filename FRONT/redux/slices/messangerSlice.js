import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "./uiSlice";
import instance from "../instance";

const initialState = {
  isUpdated: false
};

export const sendMessage = createAsyncThunk(
  "chats/sendMessage",
  async({userId, shelterId, modifiedBy, text}, { dispatch }) => {
    dispatch(setLoading(true));
    const res = await instance().post("/messages", {
      userId, shelterId, modifiedBy, text
    });
    dispatch(addMessage(res.data));
    dispatch(setLoading(false));
  }
)

export const fetchChat = createAsyncThunk(
  "chat/fetchChat",
  async ({ limit, offset, userId, shelterId, role }, { dispatch }) => {
    dispatch(setLoading(true));
    const res = await instance().get(
      `/messages/?limit=${limit}&offset=${offset}&userId=${userId}&shelterId=${shelterId}`
    );
    console.log("res.data: ", res.data)
    if (res.data.length > 0) {
      res.data.push(role)
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
      const role = action.payload.pop()
      if (role === "user") {
        state[action.payload[0].shelterId] = action.payload;
      } else {
        state[action.payload[0].userId] = action.payload;
      }
    },
    addMessage: (state, action) => {
      if (action.payload.modifiedBy === "user") {
        state[action.payload.shelterId].push(action.payload)
      } else {
        state[action.payload.userId].push(action.payload)
      }
    }
  },
});

export const { setChat, addMessage } = messengerSlice.actions;
export default messengerSlice.reducer;
