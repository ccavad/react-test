import React from "react";
import { nanoid } from "nanoid";

function Map({ regions, regionId, setRegionId, setMousePos }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 800 600"
      style={{ enableBackground: "new 0 0 800 600" }}
      xmlSpace="preserve"
    >
      <g id="Azerbaijan">
        {regions.map((reg, ind) => (
          <path
            key={nanoid()}
            d={reg.path}
            style={{ fill: regionId == ind ? "#9e2a2c" : "#429b4a" }}
            onClick={() => {
              setRegionId(ind);
            }}
            onMouseMove={(e) => {
              setMousePos({
                x: e.pageX + 15,
                y: e.pageY + 15,
                name: reg.ad,
              });
            }}
            onMouseLeave={() =>
              setMousePos({
                x: 0,
                y: 0,
                name: "",
              })
            }
          />
        ))}
      </g>
    </svg>
  );
}

export default Map;
