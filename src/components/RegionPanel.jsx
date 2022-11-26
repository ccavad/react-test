import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { spend } from "../features/resourcesSlice";
import { zoneReducer } from "../features/regionsSlice";
import Agriculture from "./zones/Agriculture";
import Culture from "./zones/Culture";
import Military from "./zones/Military";
import OilZone from "./zones/OilZone";
import Tourism from "./zones/Tourism";
import Trade from "./zones/Trade";
import Social from "./zones/Social";
import { BtnGeneral } from "./ButtonComponents";
import { nanoid } from "nanoid";

function RegionPanel({ id }) {
  const regions = useSelector((state) => state.regions.value);

  return (
    <div>
      {regions.map((reg, ind) => (
        <div style={{ display: ind !== id && "none" }} key={nanoid()}>
          <h1>{reg.ad}</h1>
          <ZoneSelect id={id} />
        </div>
      ))}
    </div>
  );
}

function ZoneSelect({ id }) {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.resources.value.money);
  const [zone, setZone] = useState("");
  const zoneSelectRef = useRef(null);

  function zoneHandler(name, zonePrice) {
    if (money.amount >= zonePrice) {
      dispatch(spend(zonePrice));
      switch (name) {
        case "agr":
          setZone(<Agriculture />);
          dispatch(zoneReducer({ regId: id, name: "kənd təsərrüfatı" }));
          break;
        case "oil":
          setZone(<OilZone />);
          dispatch(zoneReducer({ regId: id, name: "neft sektoru" }));
          break;
        case "mil":
          setZone(<Military />);
          dispatch(zoneReducer({ regId: id, name: "hərbi zona" }));
          break;
        case "cul":
          setZone(<Culture />);
          dispatch(zoneReducer({ regId: id, name: "mədəniyyət zonası" }));
          break;
        case "tou":
          setZone(<Tourism />);
          dispatch(zoneReducer({ regId: id, name: "turizm sektoru" }));
          break;
        case "tra":
          setZone(<Trade />);
          dispatch(zoneReducer({ regId: id, name: "ticarət zonası" }));
          break;
        case "soc":
          setZone(<Social />);
          dispatch(zoneReducer({ regId: id, name: "sosial zona" }));
          break;
      }
      zoneSelectRef.current.style.display = "none";
      console.log(zoneSelectRef.current);
    }
  }

  return (
    <>
      <div ref={zoneSelectRef}>
        <h2>Bu regionda nə sektoru quracaqsan?</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <BtnGeneral onClick={() => zoneHandler("agr", 30)}>
            Kənd təsərrüfatı
            <div className="btn-price">30</div>
          </BtnGeneral>
          <BtnGeneral onClick={() => zoneHandler("oil", 100)}>
            Neft Sektoru
            <div className="btn-price">100</div>
          </BtnGeneral>
          <BtnGeneral onClick={() => zoneHandler("mil", 60)}>
            Hərbi Zona
            <div className="btn-price">60</div>
          </BtnGeneral>
          <BtnGeneral onClick={() => zoneHandler("cul", 30)}>
            Mədəniyyət Zonası
            <div className="btn-price">30</div>
          </BtnGeneral>
          <BtnGeneral onClick={() => zoneHandler("tou", 80)}>
            Turizm Sektoru
            <div className="btn-price">80</div>
          </BtnGeneral>
          <BtnGeneral onClick={() => zoneHandler("tra", 100)}>
            Ticarət Zonası
            <div className="btn-price">100</div>
          </BtnGeneral>
          <BtnGeneral onClick={() => zoneHandler("soc", 50)}>
            Sosial Zona
            <div className="btn-price">50</div>
          </BtnGeneral>
        </div>
      </div>
      {zone}
    </>
  );
}

export default RegionPanel;
