import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { armyReducer } from "../../features/resourcesSlice";
import { BtnGeneral } from "../ButtonComponents";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { setZoneState } from "../../features/regionsSlice";
import produce from "immer";

const Btn = styled(BtnGeneral)`
  background-color: #08b14e;
  color: white;

  &:hover,
  &:focus {
    color: white;
  }
  &:active {
    color: black;
  }
`;

function Military({ regionState, regId }) {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.resources.value.money);

  function armyHandler() {
    if (money.amount >= 100) {
      dispatch(armyReducer());
    }
  }

  return (
    <div>
      <h2>Hərbi Zona</h2>
      <Btn onClick={armyHandler}>
        Əsgər al
        <div className="btn-price">100</div>
      </Btn>
    </div>
  );
}

export default Military;
