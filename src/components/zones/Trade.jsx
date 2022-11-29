import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selling } from "../../features/resourcesSlice";
import { BtnGeneral } from "../ButtonComponents";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { setZoneState } from "../../features/regionsSlice";
import produce from "immer";

const Btn = styled(BtnGeneral)`
  background-color: #9c0909;
  color: white;

  &:hover,
  &:focus {
    color: white;
  }
  &:active {
    color: black;
  }
`;

function Trade({ regionState, regId }) {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.resources.value.money);
  const food = useSelector((state) => state.resources.value.food);
  const oil = useSelector((state) => state.resources.value.oil);

  function sellFood() {
    if (food.amount >= 10) {
      dispatch(selling({ name: "food", money: regionState.food }));
    }
  }
  function sellOil() {
    if (oil.amount >= 1) {
      dispatch(selling({ name: "oil", money: regionState.oil }));
      const nextState = produce(regionState, (draftState) => {
        draftState.oil = Math.max(1, Math.floor(draftState.oil * 0.95));
      });
      dispatch(setZoneState({ regId: regId, zoneState: nextState }));
    }
  }

  return (
    <div>
      <h2>Ticarət Zonası</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <Btn onClick={sellOil}>
          1 barel Neft sat
          <div className="btn-price">{regionState.oil}</div>
        </Btn>
        <Btn onClick={sellFood}>
          10 Yemək sat
          <div className="btn-price">{regionState.food}</div>
        </Btn>
      </div>
    </div>
  );
}

export default Trade;
