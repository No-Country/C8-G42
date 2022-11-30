import { configureStore } from '@reduxjs/toolkit';
import messangerReducer from "../slices/messangerSlice"
import petsReducer from "../slices/petsSlice";
import uiReducer from '../slices/uiSlice';
import usersReducer from "../slices/usersSlice";
import sheltersReducer from "../slices/sheltersSlice";

export const store = configureStore({
  reducer: {
    messenger: messangerReducer,
    pets: petsReducer,
    shelters: sheltersReducer,
    ui: uiReducer,
    users: usersReducer,
  },
});
