import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeHappy } from "../../features/resourcesSlice";
import { BtnGeneral } from "../ButtonComponents";
import styled from "styled-components";

const Btn = styled(BtnGeneral)`
  background-color: #6415cc;
  color: white;

  &:hover,
  &:focus {
    color: white;
  }
  &:active {
    color: black;
  }
`;

function Social() {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.resources.value.money);

  function clickHandler(price, happy, event) {
    if (money.amount >= price) {
      dispatch(makeHappy(happy));
      event.target.closest("button").remove();
    }
  }
  return (
    <div>
      <h2>Sosial Zona</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        <Btn onClick={(e) => clickHandler(35, 1, e)}>
          məktəb (+1)
          <div className="btn-price">35</div>
        </Btn>
        <Btn onClick={(e) => clickHandler(30, 1, e)}>
          məscid (+1)
          <div className="btn-price">30</div>
        </Btn>
        <Btn onClick={(e) => clickHandler(50, 3, e)}>
          xəstəxana (+2)
          <div className="btn-price">50</div>
        </Btn>{" "}
        <Btn onClick={(e) => clickHandler(40, 2, e)}>
          polis bölməsi (+2)
          <div className="btn-price">40</div>
        </Btn>
        <Btn onClick={(e) => clickHandler(30, 2, e)}>
          mall (+2)
          <div className="btn-price">30</div>
        </Btn>
        <Btn onClick={(e) => clickHandler(25, 3, e)}>
          park (+3)
          <div className="btn-price">25</div>
        </Btn>
        <Btn onClick={(e) => clickHandler(60, 4, e)}>
          bayram tədbiri (+4)
          <div className="btn-price">60</div>
        </Btn>
      </div>
    </div>
  );
}

export default Social;
