import { configureStore } from '@reduxjs/toolkit';
import petsReducer from "../slices/petsSlice";
import uiReducer from '../slices/uiSlice';
import usersReducer from "../slices/usersSlice";

export const store = configureStore({
  reducer: {
    pets: petsReducer,
    ui: uiReducer,
    users: usersReducer,
  },
});
