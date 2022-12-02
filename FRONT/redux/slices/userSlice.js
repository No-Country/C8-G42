import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPage } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
  user: null,
}

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const res = await getPage("/users");
    dispatch(setUser(res));
    dispatch(setLoading(false));
  }
)

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    }
  },
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;