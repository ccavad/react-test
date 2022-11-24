import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { oneUp } from "../../features/resourcesSlice";
import { BtnGeneral } from "../ButtonComponents";
import styled from "styled-components";

function Trade() {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.resources.value.money);
  return (
    <div>
      <h2>Ticarət Zonası</h2>
      <div></div>
      // her ticari sektor +5 pul verecek ve orda her tur limitli miqdarda neft
      ve yemek satmaq olacaq
    </div>
  );
}

export default Trade;
