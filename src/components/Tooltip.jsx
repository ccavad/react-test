import React from "react";
import styled from "styled-components";

function Tooltip({ mousePos }) {
  return (
    <TooltipStyled
      style={{
        left: mousePos.x + "px",
        top: mousePos.y + "px",
        display: !mousePos.name && "none",
      }}
    >
      {mousePos.name} <br />
    </TooltipStyled>
  );
}

const TooltipStyled = styled.div`
  position: absolute;
  padding: 1rem 1.5rem;
  text-align: center;
  background-color: white;
  color: #bc4749;
  max-width: 150px;
  pointer-events: none;
  border-radius: 4px;
`;

export default Tooltip;
