import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Header({ setRulesModal }) {
  const { food, oil, money, people, happiness, culture, army, defence, turn } =
    useSelector((state) => state.resources.value);

  return (
    <HeaderStyled>
      <HeaderResource>
        <i className="fa-solid fa-apple-whole"></i>
        <Amount>
          {food.amount}
          <PerTurn value={food.perTurn}>
            ({food.perTurn > 0 && "+"}
            {food.perTurn})
          </PerTurn>
        </Amount>
      </HeaderResource>
      <HeaderResource>
        <i className="fa-solid fa-money-bill"></i>
        <Amount>
          {money.amount}
          <PerTurn value={money.perTurn}>
            ({money.perTurn > 0 && "+"}
            {money.perTurn})
          </PerTurn>
        </Amount>
      </HeaderResource>
      <HeaderResource>
        <i className="fa-solid fa-oil-well"></i>
        <Amount>
          {oil.amount}
          <PerTurn value={oil.perTurn}>
            ({oil.perTurn > 0 && "+"}
            {oil.perTurn})
          </PerTurn>
        </Amount>
      </HeaderResource>
      <HeaderResource>
        <i className="fa-solid fa-people-group"></i>
        <Amount>{people}</Amount>
      </HeaderResource>
      <HeaderResource>
        {happiness > 65 && <i className="fa-solid fa-face-smile"></i>}
        {happiness < 35 && <i className="fa-solid fa-face-tired"></i>}
        {happiness >= 35 && happiness <= 65 ? (
          <i className="fa-solid fa-face-meh"></i>
        ) : (
          ""
        )}
        <Amount>{happiness}</Amount>
      </HeaderResource>
      <HeaderResource>
        <i className="fa-solid fa-palette"></i>
        <Amount>
          {culture.amount}
          <PerTurn value={culture.perTurn}>
            ({culture.perTurn > 0 && "+"}
            {culture.perTurn})
          </PerTurn>
        </Amount>
      </HeaderResource>
      <HeaderResource>
        <i className="fa-solid fa-person-military-rifle"></i>
        <Amount>{army}</Amount>
      </HeaderResource>
      <Rules>
        <button onClick={() => setRulesModal(true)}>Qaydalar</button>
      </Rules>
      <Amount>Tur: {turn}</Amount>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  grid-column: span 2;
  background-color: #092235;
  padding: 1rem 2rem;
  color: white;
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const HeaderResource = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Amount = styled.span`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  justify-content: flex-end;
  flex: 1;
`;

const Rules = styled.div`
  flex: 3;
  display: flex;
  justify-content: flex-end;

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

const PerTurn = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${(props) => (props.value > 0 ? "green" : "red")};
  color: ${(props) => props.value == 0 && "gray"};
`;

export default Header;
