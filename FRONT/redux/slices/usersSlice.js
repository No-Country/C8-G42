import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPage } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
  users: [],
}

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async ({limit, offset}, { dispatch }) => {
    dispatch(setLoading(true));
    const res = await getPage("/users", limit, offset);
    dispatch(setUsers(res));
    dispatch(setLoading(false));
  }
)

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload    //   "users/setUsers"
    }
  },
})

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;