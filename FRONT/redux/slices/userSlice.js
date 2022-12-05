import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPage } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
  user: null,
};

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async ({ email }, { dispatch }) => {
    dispatch(setLoading(true));
    let res = await getPage(`/users/${email}`);
    if (!res) {
      await getPage(`/users/self`);
      res = await getPage(`/users/${email}`);
    }
    dispatch(setUser(res));
    dispatch(setLoading(false));
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;