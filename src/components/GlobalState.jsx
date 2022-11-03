import React, { useState } from "react";
import App from "../App";

function GlobalState() {
  const [region, setRegion] = useState("");
  const [mousePos, setMousePos] = useState({
    x: "",
    y: "",
    name: "",
  });
  return (
    <App
      region={region}
      setRegion={setRegion}
      mousePos={mousePos}
      setMousePos={setMousePos}
    />
  );
}

export default GlobalState;
