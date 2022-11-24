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
      <b>{mousePos.name}</b> <br />
      <span>{mousePos.zone}</span>
    </TooltipStyled>
  );
}

const TooltipStyled = styled.div`
  position: absolute;
  padding: 0.5rem 1.5rem;
  text-align: center;
  background-color: white;
  color: #bc4749;
  max-width: 150px;
  pointer-events: none;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.3) 1px 2px 4px;

  span {
    font-size: 0.75rem;
    color: #010101;
    font-style: italic;
  }
`;

export default Tooltip;
