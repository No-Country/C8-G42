import { configureStore } from '@reduxjs/toolkit';
import messangerReducer from "../slices/messangerSlice"
import petsReducer from "../slices/petsSlice";
import sheltersReducer from "../slices/sheltersSlice";
import uiReducer from '../slices/uiSlice';
import userReducer from "../slices/userSlice"
import usersReducer from "../slices/usersSlice";

export const store = configureStore({
  reducer: {
    messenger: messangerReducer,
    pets: petsReducer,
    shelters: sheltersReducer,
    ui: uiReducer,
    user: userReducer,
    users: usersReducer,
  },
});
