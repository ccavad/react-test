import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { oilReducer } from "../../features/resourcesSlice";
import { BtnGeneral } from "../ButtonComponents";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { setZoneState } from "../../features/regionsSlice";
import produce from "immer";

const Btn = styled(BtnGeneral)`
  background-color: #222;
  color: white;

  &:hover,
  &:focus {
    color: white;
  }
  &:active {
    color: black;
  }
`;

const InfoPanel = styled.div`
  display: flex;
  gap: 3rem;

  h3 {
    font-style: italic;
    color: darkred;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

function OilZone({ regionState, regId }) {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.resources.value.money);
  const oil = useSelector((state) => state.zones.value.oilZone);

  function wellHandler() {
    if (money.amount >= regionState.well.price) {
      dispatch(oilReducer({ perTurn: 1, price: regionState.well.price }));
      const nextState = produce(regionState, (draftState) => {
        draftState.well.price = Math.floor(draftState.well.price * 1.3);
        draftState.well.count++;
      });
      dispatch(setZoneState({ regId: regId, zoneState: nextState }));
    }
  }

  function companyHandler() {
    if (money.amount >= regionState.company.price) {
      dispatch(oilReducer({ perTurn: 10, price: regionState.well.price }));
      const nextState = produce(regionState, (draftState) => {
        draftState.company.price = Math.floor(draftState.company.price * 1.4);
        draftState.company.count++;
      });
      dispatch(setZoneState({ regId: regId, zoneState: nextState }));
    }
  }

  return (
    <div>
      <h2>Neft Sektoru</h2>
      <InfoPanel>
        <h3> Neft quyusu sayı: {regionState.well.count}</h3>
        <h3> Şirkət sayı: {regionState.company.count}</h3>
      </InfoPanel>
      <BtnContainer>
        <Btn onClick={wellHandler}>
          Neft quyusu qaz
          <div className="btn-price">{regionState.well.price}</div>
        </Btn>
        <Btn onClick={companyHandler}>
          Neft şirkəti qur
          <div className="btn-price">{regionState.company.price}</div>
        </Btn>
      </BtnContainer>
    </div>
  );
}

export default OilZone;
