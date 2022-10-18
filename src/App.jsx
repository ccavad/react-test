import { useState, useEffect } from "react";
import "./App.css";
import Map from "./components/Map";
import Regions from "./components/Regions";

function App() {
  const [region, setRegion] = useState("");
  const [mousePos, setMousePos] = useState({
    x: "",
    y: "",
    name: "",
  });

  return (
    <div className="App">
      <header style={{ gridColumn: "span 2", background: "red" }}>s</header>
      <Map regions={Regions} setRegion={setRegion} setMousePos={setMousePos} />
      <div
        className="tooltip"
        style={{
          left: mousePos.x + "px",
          top: mousePos.y + "px",
          display: !mousePos.name && "none",
        }}
      >
        {mousePos.name} <br />
        {mousePos.x} <br />
        {mousePos.y}
      </div>
      <div>
        <h1>{region}</h1>
      </div>
    </div>
  );
}

export default App;
