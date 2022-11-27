import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    turn: 1,
    food: {
      amount: 10,
      perTurn: 5,
    },
    oil: {
      amount: 0,
      perTurn: 0,
    },
    money: {
      amount: 10000,
      perTurn: 10,
    },
    people: 5,
    happiness: 70,
    culture: {
      amount: 0,
      perTurn: 0,
    },
    army: 5,
  },
};

export const resourcesSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {
    increment: (state, action) => {
      if (state.value.money.amount >= action.payload.price) {
        let name = action.payload.name;
        state.value[name].perTurn += action.payload.adding;
        state.value.money.amount -= action.payload.price;
      }
    },
    // people, army kimi tek tek artacaq resurslara aiddir
    oneUp: (state, action) => {
      let name = action.payload.name;
      state.value[name]++;
    },
    oilReducer: (state, action) => {
      state.value.oil.perTurn += action.payload.perTurn;
      state.value.money.amount -= action.payload.price;
    },
    selling: (state, action) => {
      let product = action.payload.name;
      state.value[product].amount -= product === "food" ? 10 : 1;
      state.value.money.amount += action.payload.money;
    },
    makeHappy: (state, action) => {
      state.value.happiness += action.payload;
    },
    spend: (state, action) => {
      let price = action.payload;
      if (state.value.money.amount >= price) {
        state.value.money.amount -= price;
      }
    },
    startValues: ({ value }) => {
      value.happiness = 100 - value.people * 2;
      value.money.perTurn = value.people * 2 - value.army;
    },
    nextTurnDp: ({ value }) => {
      value.turn++;
      value.food.amount += value.food.perTurn;
      value.oil.amount += value.oil.perTurn;
      value.money.amount += value.money.perTurn;
      value.culture.amount += value.culture.perTurn;
      let tax;
      // xoxbextlikden asili olaraq ne qeder vergi gelecek
      if (value.happiness > 65) {
        tax = value.people * 2;
      } else if (value.happiness < 35) {
        tax = 0;
      } else {
        tax = value.people;
      }
      value.money.perTurn = tax;
      if (value.food.amount > 0) {
        value.people++;
        value.food.perTurn--;
        value.happiness -= 2;
      } else {
        value.happiness -= 4;
      }
      if (value.happiness < 0) {
        value.happiness = 0;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  oneUp,
  makeHappy,
  nextTurnDp,
  spend,
  startValues,
  oilReducer,
  selling,
} = resourcesSlice.actions;

export default resourcesSlice.reducer;
