import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  message: "",
  state: null
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setState: (state, action) => {
      state.state = action.payload
    }
  }
})

export const { setLoading, setMessage, setState } = uiSlice.actions;
export default uiSlice.reducer;