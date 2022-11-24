import React from "react";
import styled from "styled-components";

export default function Modal() {
  return (
    <ModalStyled>
      <h2>Loading</h2>
      <Progress></Progress>
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
`;

const Progress = styled.div`
  width: 100px;
  height: 10px;
  background-color: white;
  animation: modalprogress 500ms linear infinite;
  position: absolute;
  margin-top: 100px;
  border-radius: 10px;
`;
