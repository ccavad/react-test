import React from "react";
import styled from "styled-components";

export default function GameStateModal({ state }) {
  let text = "";
  switch (state) {
    case "won":
      text = "Təbriklər. Oyunu Qazandınız";
      break;
    case "unhappy":
      text = "Xalqın üsyan qaldırıb sənin istefaya yolladı";
      break;
    case "hunger":
      text = "Ərzaq qıtlığına görə istefaya getməli oldun";
      break;
    case "occupation":
      text =
        "Ordun zəiflədikdən sonra qonşu dövlətlər tərəfindən işğal olundun";
      break;
  }
  return (
    <ModalStyled>
      <h2>{text}</h2>
      <button
        onClick={() => {
          location.reload();
        }}
      >
        yenidən oyna
      </button>
    </ModalStyled>
  );
}

const ModalStyled = styled.div`
  position: fixed;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: 2.2rem;
  }
  button {
    background: white;
    border: 0;
    color: #092235;
    padding: 10px 1rem;
    cursor: pointer;
    border-radius: 4px;
    font-size: 1.1rem;
    transition: 0.4s;

    &:hover {
      box-shadow: rgb(255 244 244 / 24%) 0px 3px 8px;
    }
  }
`;
