import React, { useState } from "react";
import styled from "styled-components";

function Baku({
  oil,
  setOil,
  oilProgress,
  setOilProgress,
  oilSpeed,
  setOilSpeed,
  money,
  setMoney,
}) {
  let count = 0;
  // const [oil, setOil] = useState({
  //   count: 0,
  //   progress: 0,
  //   speed: 1,
  // });

  function interval() {
    const interval = setInterval(() => {
      count += oilSpeed;
      if (count < 101) {
        setOilProgress(count);
      } else {
        setOilProgress(0);
        setOil((o) => o + 1);
        clearInterval(interval);
      }
    }, 200);
  }

  return (
    <div>
      <div>
        <Bar>
          <Amount width={oilProgress}></Amount>
        </Bar>
        {/* <progress max={100} value={oilProgress} /> */}
      </div>
      <br />
      <button
        onClick={interval}
        disabled={oilProgress < 100 && 0 < oilProgress}
      >
        neft cixar
      </button>
      <br /> <span>{oilSpeed}</span>
      <br />
      {oil > 15 && (
        <button
          onClick={() => {
            if (money >= 20) {
              setOilSpeed((s) => s + 1);
              setMoney((mon) => mon - 20);
            }
          }}
        >
          upgrade
        </button>
      )}
      <br />
      {oil > 20 && (
        <button
          onClick={() => {
            if (money >= 50) {
              setMoney((mon) => mon - 50);
              const interval = setInterval(() => {
                count += oilSpeed;
                if (count < 101) {
                  setOilProgress(count);
                } else {
                  count = 0;
                  setOilProgress(0);
                  setOil((o) => o + 1);
                }
              }, 200);
            }
          }}
        >
          auto buy
        </button>
      )}
    </div>
  );
}

const Bar = styled.div`
  height: 10px;
  width: 140px;
  border: 1px solid #092235;
  background-color: #d9ed92;
  border-radius: 10px;
  overflow: hidden;
`;

const Amount = styled.div`
  height: 100%;
  background-color: #092235;
  border-radius: 10px;
  width: ${(props) => props.width}%;
`;

export default Baku;
