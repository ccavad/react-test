import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { oneUp } from "../../features/resourcesSlice";
import { BtnGeneral } from "../ButtonComponents";
import styled from "styled-components";

function Social() {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.resources.value.money);
  return (
    <div>
      <h2>Sosial Zona</h2>
      <div></div>
      // her bina tikdikde xosbextlik mueyyen miqdarda artacaq
    </div>
  );
}

export default Social;
