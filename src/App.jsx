import { useState, useEffect } from "react";
import "./App.css";
import Map from "./components/Map";
import Tooltip from "./components/Tooltip";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Agriculture from "./components/zones/Agriculture";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  oneUp,
  makeHappy,
  nextTurnDp,
  startValues,
} from "./features/resourcesSlice";
import RegionPanel from "./components/RegionPanel";
import { NextBtn } from "./components/ButtonComponents";

function App() {
  const [loading, setLoading] = useState(false);
  const [regionId, setRegionId] = useState(8);
  const [mousePos, setMousePos] = useState({
    x: "",
    y: "",
    name: "",
    zone: "",
  });

  const Regions = useSelector((state) => state.regions.value);
  const dispatch = useDispatch();
  const agriculture = useSelector((state) => state.zones.value.agriculture);

  // useEffect(() => {
  //   if (happiness > 100) {
  //     setHappiness(100);
  //   }
  //   if (happiness < 0) {
  //     setHappiness(0);
  //   }
  // }, [happiness]);

  useEffect(() => {
    console.log("Start");
    console.log(agriculture);
    dispatch(startValues());
  }, []);

  function nextTurn() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(nextTurnDp());
    }, 500);
  }

  return (
    <div className="App">
      {loading && <Modal />}
      <Header />
      <Map
        regions={Regions}
        regionId={regionId}
        setRegionId={setRegionId}
        setMousePos={setMousePos}
      />
      <Tooltip mousePos={mousePos} />
      <Agriculture />
      {/* <RegionPanel id={regionId} /> */}
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
