import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { oneUp } from "../../features/resourcesSlice";
import { BtnGeneral } from "../ButtonComponents";
import styled from "styled-components";

function Tourism() {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.resources.value.money);
  return (
    <div>
      <h2>Turizm Sektoru</h2>
      <div></div>
      // her sektor +5 pul verecek ve orda her tur limitli miqdarda neft ve
      yemek satmaq olacaq, medeniyetin ne qeder yuksek olsa o qeder de cox pul
      qazandiracaq
    </div>
  );
}

export default Tourism;
