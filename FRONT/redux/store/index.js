import { configureStore } from "@reduxjs/toolkit";
import messangerReducer from "../slices/messangerSlice";
import petsReducer from "../slices/petsSlice";
import sheltersReducer from "../slices/sheltersSlice";
import uiReducer from "../slices/uiSlice";
import userReducer from "../slices/userSlice";
import petsFamilyFilter from "../slices/petsFamilySlice";
import usersReducer from "../slices/usersSlice";
import petReducer from "../slices/petSlice"

export const store = configureStore({
  reducer: {
    messenger: messangerReducer,
    pets: petsReducer,
    pet: petReducer,
    shelters: sheltersReducer,
    ui: uiReducer,
    user: userReducer,
    users: usersReducer,
    petsFamilyFilter,
  },
});
