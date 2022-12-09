import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPage, postPet, updatePet, deletePet } from "../api";
import { setLoading, setState, setMessage as stateMessage } from "./uiSlice";

const initialState = {
  shelterPets: [],
  pet: null,
};
  
export const fetchShelterPets = createAsyncThunk(
  "shelterPets/fetchPets",
  async ({ id, limit, offset }, { dispatch }) => {
    dispatch(setLoading(true));
    const res = await getPage(`/pets/shelter/${id}`, limit, offset);
    dispatch(setShelterPets(res.data.pets));
    dispatch(setLoading(false));
  }
);

export const addNewPet = createAsyncThunk(
  "shelterPets/addPet",
  async ({ body }, { dispatch }) => {
    dispatch(setLoading(true));
    const res = await postPet("/pets", body);
    if(res.data.status==='success'){
      dispatch(setState("success"));
      dispatch(
        stateMessage(
          `Mascota agregada🐱🐾🐶`
        ))}else{
          dispatch(setState("error"));
          dispatch(
            stateMessage(
              `Revise los datos ingresados🐾`
            ))
        }
    dispatch(addPet(res));
    dispatch(setLoading(false));
  }
);

export const putPet = createAsyncThunk(
  "shelterPets/putThePet",
  async ({ id, body }, { dispatch }) => {
    dispatch(setLoading(true));
    const res = await updatePet(`/pets/${id}`, body);
    console.log(res)
    if(res.data.                            status==='success'){
      dispatch(setState("success"));
      dispatch(
        stateMessage(
          `Mascota actualizada🐱🐾🐶`
        ))}else{
          dispatch(setState("error"));
          dispatch(
            stateMessage(
              `Revise los datos ingresados🐾`
            ))
        }
    dispatch(putThePet(res));
    dispatch(setLoading(false));
  }
);

export const destroyPet = createAsyncThunk(
  "shelterPets/destroyThePet",
  async ({ id }, { dispatch }) => {
    dispatch(setLoading(true));
  const res= await deletePet(`/pets/${id}`);
  if(res.data.status==='success'){
    dispatch(setState("success"));
    dispatch(
      stateMessage(
        `Mascota eliminada🐱🐾🐶`
      ))}else{
        dispatch(setState("error"));
        dispatch(
          stateMessage(
            `Revise los datos ingresados🐾`
          ))
      } 
  dispatch(setLoading(false));
  }
);

export const petSlice = createSlice({
  name: "shelterPets",
  initialState,
  reducers: {
    setShelterPets: (state, action) => {
      console.log(action.payload)
      state.shelterPets = action.payload;
    },
    addPet: (state, action) => {
      state.shelterPets.push(action.payload.data.data.newPet);
    }  ,
    putThePet: (state, action) => {},
    destroyThePet: (state, action) => {}, 
  },
});

export const { setShelterPets, addPet, putThePet, destroyThePet } = petSlice.actions;
export default petSlice.reducer;
