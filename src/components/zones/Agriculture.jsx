import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../features/resourcesSlice";
import { BtnGeneral } from "../ButtonComponents";
import styled from "styled-components";

const Btn = styled(BtnGeneral)`
  background-color: #15cc3d;
  color: white;

  &:hover,
  &:focus {
    color: white;
  }
  &:active {
    color: black;
  }
`;

function Agriculture() {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.resources.value.money);

  function clickHandler(price, adding, event) {
    dispatch(increment({ name: "food", price: price, adding: adding }));
    if (money.amount >= price) {
      // console.log(event.target.closest("button"));
      event.target.closest("button").remove();
    }
  }

  return (
    <div>
      <h2>Kənd təsərrüfatı</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        <Btn onClick={(e) => clickHandler(15, 2, e)}>
          meyvəçilik (+2)
          <div className="btn-price">15</div>
        </Btn>
        <Btn onClick={(e) => clickHandler(30, 4, e)}>
          qaramal (+4)
          <div className="btn-price">30</div>
        </Btn>
        <Btn onClick={(e) => clickHandler(20, 3, e)}>
          qoyunçuluq (+3)
          <div className="btn-price">20</div>
        </Btn>
        <Btn onClick={(e) => clickHandler(15, 2, e)}>
          quşçuluq (+2)
          <div className="btn-price">15</div>
        </Btn>
        <Btn onClick={(e) => clickHandler(15, 3, e)}>
          balıqçılıq (+3)
          <div className="btn-price">15</div>
        </Btn>
        <Btn onClick={(e) => clickHandler(40, 5, e)}>
          taxılçılıq (+5)
          <div className="btn-price">40</div>
        </Btn>
        <Btn onClick={(e) => clickHandler(10, 1, e)}>
          çayçılıq (+1)
          <div className="btn-price">10</div>
        </Btn>
      </div>
    </div>
  );
}

export default Agriculture;
