import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../features/resourcesSlice";
import { BtnGeneral } from "../ButtonComponents";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { setZoneState } from "../../features/regionsSlice";
import produce from "immer";

const Btn = styled(BtnGeneral)`
  background-color: deeppink;
  color: white;

  &:hover,
  &:focus {
    color: white;
  }
  &:active {
    color: black;
  }
`;

function Culture({ regionState, regId }) {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.resources.value.money);

  const clickHandler = (ind, price, adding) => {
    if (money.amount >= price) {
      const nextState = produce(regionState, (draftState) => {
        draftState[ind].completed = true;
      });
      dispatch(increment({ name: "culture", price: price, adding: adding }));
      dispatch(setZoneState({ regId: regId, zoneState: nextState }));
    }
  };

  return (
    <div>
      <h2>Mədəniyyət Zona</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        {regionState.map((category, index) => (
          <Btn
            key={nanoid()}
            onClick={() => clickHandler(index, category.price, category.adding)}
            disabled={category.completed}
          >
            {category.name} (+{category.adding})
            <div className="btn-price">{category.price}</div>
          </Btn>
        ))}
      </div>
    </div>
  );
}

export default Culture;
