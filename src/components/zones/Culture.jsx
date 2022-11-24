import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { oneUp } from "../../features/resourcesSlice";
import { BtnGeneral } from "../ButtonComponents";
import styled from "styled-components";

function Culture() {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.resources.value.money);
  return (
    <div>
      <h2>Sosial Zona</h2>
      <div></div>
      // her bina her tur medeniyet artiracaq. ve her 10 medeniyet xali +1
      xosbextlik verecek
    </div>
  );
}

export default Culture;
