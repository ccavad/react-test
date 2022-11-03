import { useState, useEffect } from "react";
import "./App.css";
import Baku from "./components/Baku";
import Map from "./components/Map";
import Regions from "./components/Regions";
import SekiZaqatala from "./components/SekiZaqatala";

function App() {
  const [money, setMoney] = useState(500);
  const [region, setRegion] = useState("");
  const [oil, setOil] = useState(14);
  const [oilProgress, setOilProgress] = useState(0);
  const [oilSpeed, setOilSpeed] = useState(1);
  const [mousePos, setMousePos] = useState({
    x: "",
    y: "",
    name: "",
  });

  return (
    <div className="App">
      <header>
        <div className="header-resource">
          <i class="fa-solid fa-oil-well"></i>
          <span>{oil}</span>
        </div>
        <div className="header-resource">
          <i class="fa-solid fa-money-bill"></i>
          <span>{money}</span>
        </div>
      </header>
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
        {/* {mousePos.x} <br />
        {mousePos.y} */}
      </div>
      <div>
        <h1>{region}</h1>
        {region === "Bakı" && (
          <Baku
            oil={oil}
            setOil={setOil}
            oilProgress={oilProgress}
            setOilProgress={setOilProgress}
            oilSpeed={oilSpeed}
            setOilSpeed={setOilSpeed}
            money={money}
            setMoney={setMoney}
          />
        )}
        {region === "Şəki-Zaqatala" && <SekiZaqatala />}
      </div>
    </div>
  );
}

export default App;
