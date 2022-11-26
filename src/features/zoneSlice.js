import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    agriculture: [
      {
        name: "meyvəçilik",
        completed: false,
        price: 15,
        adding: 2,
      },
      {
        name: "qaramal",
        completed: false,
        price: 30,
        adding: 4,
      },
      {
        name: "qoyunçuluq",
        completed: false,
        price: 20,
        adding: 3,
      },
      {
        name: "quşçuluq",
        completed: false,
        price: 15,
        adding: 3,
      },
      {
        name: "balıqçılıq",
        completed: false,
        price: 15,
        adding: 3,
      },
      {
        name: "taxılçılıq",
        completed: false,
        price: 40,
        adding: 5,
      },
      {
        name: "çayçılıq",
        completed: false,
        price: 10,
        adding: 1,
      },
    ],
  },
};

export const zoneSlice = createSlice({
  name: "zones",
  initialState,
  reducers: {
    setAgriculture: (state, action) => {
      state.value.agriculture[action.payload].completed = true;
    },
  },
});

export const { setAgriculture } = zoneSlice.actions;

export default zoneSlice.reducer;
