import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { oneUp } from "../../features/resourcesSlice";
import { BtnGeneral } from "../ButtonComponents";
import styled from "styled-components";

function OilZone() {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.resources.value.money);
  return (
    <div>
      <h2>Neft Sektoru</h2>
      <div></div>
      // her neft quyusu her tura +1 neft verecek. her quyununun qiymeti bir
      oncekinin 1.5 qati olacaq
    </div>
  );
}

export default OilZone;
