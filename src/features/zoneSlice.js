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
    social: [
      {
        name: "məktəb",
        completed: false,
        price: 35,
        adding: 1,
      },
      {
        name: "məscid",
        completed: false,
        price: 30,
        adding: 1,
      },
      {
        name: "xəstəxana",
        completed: false,
        price: 50,
        adding: 2,
      },
      {
        name: "polis bölməsi",
        completed: false,
        price: 40,
        adding: 2,
      },
      {
        name: "mall",
        completed: false,
        price: 50,
        adding: 3,
      },
      {
        name: "park",
        completed: false,
        price: 25,
        adding: 3,
      },
      {
        name: "bayram tədbiri",
        completed: false,
        price: 60,
        adding: 4,
      },
    ],
    culture: [
      {
        name: "teatr",
        completed: false,
        price: 40,
        adding: 1,
      },
      {
        name: "konservatoriya",
        completed: false,
        price: 45,
        adding: 1,
      },
      {
        name: "yazıçılar birliyi",
        completed: false,
        price: 30,
        adding: 1,
      },
    ],
    oilZone: {
      well: {
        price: 50,
        adding: 1,
        count: 0,
      },
      company: {
        price: 1000,
        adding: 10,
        count: 0,
      },
    },
    trade: {
      food: 5,
      oil: 50,
    },
  },
};

export const zoneSlice = createSlice({
  name: "zones",
  initialState,
  reducers: {
    setAgriculture: (state, action) => {
      console.log(state.value);
    },
  },
});

export const { setAgriculture } = zoneSlice.actions;

export default zoneSlice.reducer;
