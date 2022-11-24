import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setZone } from "../features/regionsSlice";
import { spend } from "../features/resourcesSlice";
import Agriculture from "./zones/Agriculture";
import Culture from "./zones/Culture";
import Military from "./zones/Military";
import OilZone from "./zones/OilZone";
import Tourism from "./zones/Tourism";
import Trade from "./zones/Trade";
import Social from "./zones/Social";
import { BtnGeneral } from "./ButtonComponents";

function RegionPanel({ id }) {
  const regions = useSelector((state) => state.regions.value);
  return (
    <div>
      <h1>{regions[id].ad}</h1>
      {regions[id].zone === "" && <ZoneSelect id={id} />}
      {regions[id].zone === "agriculture" && <Agriculture />}
      {regions[id].zone === "culture" && <Culture />}
      {regions[id].zone === "military" && <Military />}
      {regions[id].zone === "oil" && <OilZone />}
      {regions[id].zone === "tourism" && <Tourism />}
      {regions[id].zone === "trade" && <Trade />}
      {regions[id].zone === "social" && <Social />}
    </div>
  );
}

function ZoneSelect({ id }) {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.resources.value.money);

  function zoneHandler(zone, zonePrice) {
    if (money.amount >= zonePrice) {
      dispatch(setZone({ name: zone, regId: id }));
      dispatch(spend(zonePrice));
    }
  }

  return (
    <>
      <h2>Bu regionda nə sektoru quracaqsan?</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <BtnGeneral onClick={() => zoneHandler("agriculture", 30)}>
          Kənd təsərrüfatı
          <div className="btn-price">30</div>
        </BtnGeneral>
        <BtnGeneral onClick={() => zoneHandler("oil", 100)}>
          Neft
          <div className="btn-price">100</div>
        </BtnGeneral>
        <BtnGeneral onClick={() => zoneHandler("military", 60)}>
          Hərbi Zona
          <div className="btn-price">60</div>
        </BtnGeneral>
        <BtnGeneral onClick={() => zoneHandler("culture", 30)}>
          Mədəniyyət Zonası
          <div className="btn-price">30</div>
        </BtnGeneral>
        <BtnGeneral onClick={() => zoneHandler("tourism", 80)}>
          Turizm Zonası
          <div className="btn-price">80</div>
        </BtnGeneral>
        <BtnGeneral onClick={() => zoneHandler("trade", 100)}>
          Ticarət Zonası
          <div className="btn-price">100</div>
        </BtnGeneral>
        <BtnGeneral onClick={() => zoneHandler("social", 50)}>
          Sosial Zona
          <div className="btn-price">50</div>
        </BtnGeneral>
      </div>
    </>
  );
}

export default RegionPanel;
