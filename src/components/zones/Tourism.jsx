import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { oneUp } from "../../features/resourcesSlice";
import { BtnGeneral } from "../ButtonComponents";
import styled from "styled-components";

const Btn = styled(BtnGeneral)`
  background-color: #ff7b00;
  color: white;

  &:hover,
  &:focus {
    color: white;
  }
  &:active {
    color: black;
  }
`;

function Tourism() {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.resources.value.money);
  return (
    <div>
      <h2>Turizm Sektoru</h2>
      <div>
        <Btn>a</Btn>
      </div>
    </div>
  );
}

export default Tourism;
