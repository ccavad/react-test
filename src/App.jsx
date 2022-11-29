import { useState, useEffect } from "react";
import "./App.css";
import Map from "./components/Map";
import Tooltip from "./components/Tooltip";
import Modal from "./components/Modal";
import Header from "./components/Header";
import { useSelector, useDispatch } from "react-redux";
import { nextTurnDp } from "./features/resourcesSlice";
import RegionPanel from "./components/RegionPanel";
import { NextBtn } from "./components/ButtonComponents";
import GameStateModal from "./components/GameStateModal";
import RulesModal from "./components/RulesModal";

function App() {
  const [loading, setLoading] = useState(false);
  const [regionId, setRegionId] = useState(8);
  const [rulesModal, setRulesModal] = useState(false);
  const [mousePos, setMousePos] = useState({
    x: "",
    y: "",
    name: "",
    zone: "",
  });

  const Regions = useSelector((state) => state.regions.value);
  const dispatch = useDispatch();

  const gameState = useSelector((state) => state.resources.value.gameState);

  function nextTurn() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(nextTurnDp());
    }, 500);
  }

  return (
    <div className="App">
      {gameState !== "playing" && <GameStateModal state={gameState} />}
      {loading && <Modal />}
      {rulesModal && <RulesModal setRulesModal={setRulesModal} />}
      <Header setRulesModal={setRulesModal} />
      <Map
        regions={Regions}
        regionId={regionId}
        setRegionId={setRegionId}
        setMousePos={setMousePos}
      />
      <Tooltip mousePos={mousePos} />
      <RegionPanel id={regionId} />
      <div
        className="nextbtncont"
        style={{
          gridColumn: "span 2",
          display: "Flex",
          justifyContent: "flex-end",
          paddingRight: "2rem",
        }}
      >
        <NextBtn className="nextbtn" onClick={nextTurn}>
          Növbəti Tur
        </NextBtn>
      </div>
    </div>
  );
}

export default App;
