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
      amount: 200,
      perTurn: 5,
      taxes: 10,
      zoneIncome: 0,
      tourism: 0,
    },
    people: 5,
    happiness: 80,
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
    armyReducer: (state) => {
      state.value.army++;
      state.value.money.amount -= 100; //bir esgerin qiymeti
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
    setZoneIncome: (state, action) => {
      state.value.money.zoneIncome += action.payload;
    },
    tourismIncome: ({ value }, action) => {
      value.money.tourism = action.payload.perTurn;
      value.money.amount -= action.payload.price;
      value.money.perTurn =
        value.money.taxes +
        value.money.zoneIncome -
        value.army +
        value.money.tourism +
        Math.floor(value.culture.amount / 10);
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
    nextTurnDp: ({ value }) => {
      value.turn++;
      value.food.amount += value.food.perTurn;
      value.oil.amount += value.oil.perTurn;
      value.money.amount += value.money.perTurn;
      value.culture.amount += value.culture.perTurn;
      if (value.turn % 5 == 0) {
        value.army--;
      }
      if (value.food.amount > 0) {
        value.people++;
        value.food.perTurn--;
      }
      if (value.happiness < 0) {
        value.happiness = 0;
      }
      value.happiness =
        90 - value.people * 2 + Math.floor(value.culture.amount / 10);
      // xoxbextlikden asili olaraq ne qeder vergi gelecek
      if (value.happiness > 65) {
        value.money.taxes = value.people * 2;
      } else if (value.happiness < 35) {
        value.money.taxes = 0;
      } else {
        value.money.taxes = value.people;
      }
      value.money.perTurn =
        value.money.taxes +
        value.money.zoneIncome -
        value.army +
        value.money.tourism +
        Math.floor(value.culture.amount / 15);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  armyReducer,
  makeHappy,
  nextTurnDp,
  spend,
  oilReducer,
  selling,
  setZoneIncome,
  tourismIncome,
} = resourcesSlice.actions;

export default resourcesSlice.reducer;
