import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../features/resourcesSlice";
import { setAgriculture } from "../../features/zoneSlice";
import { BtnGeneral } from "../ButtonComponents";
import styled from "styled-components";
import { nanoid } from "nanoid";

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
  const agriculture = useSelector((state) => state.zones.value.agriculture);
  const [state, setState] = useState(agriculture);

  // function clickHandler(price, adding, ind) {
  //   if (money.amount >= price) {
  //     dispatch(increment({ name: "food", price: price, adding: adding }));
  //     let newArr = btns.filter((btn) => btn !== btns[ind]);
  //     setBtns(newArr);
  //     console.log(agriculture);
  //   }
  // }

  return (
    <div>
      <h2>Kənd təsərrüfatı</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        {state
          .filter((cat) => !cat.completed)
          .map((category, index) => (
            <Btn
              key={nanoid()}
              onClick={() => {
                dispatch(setAgriculture(index));
                console.log(category);
              }}
            >
              {category.name}
              <div className="btn-price">{category.price}</div>
            </Btn>
          ))}
      </div>
    </div>
  );
}

export default Agriculture;
