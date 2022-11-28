import React from "react";
import styled from "styled-components";

export default function GameStateModal({ state }) {
  return (
    <ModalStyled>
      <h2>{state}</h2>
      <button
        onClick={() => {
          location.reload();
        }}
      >
        new game
      </button>
    </ModalStyled>
  );
}

const ModalStyled = styled.div`
  position: fixed;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.6);
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
`;
