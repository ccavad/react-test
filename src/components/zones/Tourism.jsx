import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tourismIncome } from "../../features/resourcesSlice";
import { BtnGeneral } from "../ButtonComponents";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { setZoneState } from "../../features/regionsSlice";
import produce from "immer";

const Btn = styled(BtnGeneral)`
  background-color: #1730c0;
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

function Tourism({ regionState, regId }) {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.resources.value.money);
  const culture = useSelector((state) => state.resources.value.culture);

  function hotelHandler() {
    if (money.amount >= regionState.hotel.price) {
      const nextState = produce(regionState, (draftState) => {
        draftState.hotel.price = Math.floor(draftState.hotel.price * 1.1);
        draftState.hotel.count++;
      });
      dispatch(
        tourismIncome({
          perTurn: regionState.hotel.count * regionState.hotel.adding,
          price: regionState.hotel.price,
        })
      );
      dispatch(setZoneState({ regId: regId, zoneState: nextState }));
    }
  }
  return (
    <div>
      <h2>Turizm Sektoru</h2>
      <InfoPanel>
        <h3>Otel sayı : {regionState.hotel.count}</h3>
      </InfoPanel>
      <BtnContainer>
        <Btn onClick={hotelHandler}>
          Otel tik
          <div className="btn-price">{regionState.hotel.price}</div>
        </Btn>
      </BtnContainer>
    </div>
  );
}

export default Tourism;
