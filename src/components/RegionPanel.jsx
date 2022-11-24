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
      {regions[id].zone === "kənd təsərrüfatı" && <Agriculture />}
      {regions[id].zone === "mədəniyyət zonası" && <Culture />}
      {regions[id].zone === "hərbi zona" && <Military />}
      {regions[id].zone === "neft sektoru" && <OilZone />}
      {regions[id].zone === "turizm sektoru" && <Tourism />}
      {regions[id].zone === "ticarət zonası" && <Trade />}
      {regions[id].zone === "sosial zona" && <Social />}
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
        <BtnGeneral onClick={() => zoneHandler("kənd təsərrüfatı", 30)}>
          Kənd təsərrüfatı
          <div className="btn-price">30</div>
        </BtnGeneral>
        <BtnGeneral onClick={() => zoneHandler("neft sektoru", 100)}>
          Neft Sektoru
          <div className="btn-price">100</div>
        </BtnGeneral>
        <BtnGeneral onClick={() => zoneHandler("hərbi zona", 60)}>
          Hərbi Zona
          <div className="btn-price">60</div>
        </BtnGeneral>
        <BtnGeneral onClick={() => zoneHandler("mədəniyyət zonası", 30)}>
          Mədəniyyət Zonası
          <div className="btn-price">30</div>
        </BtnGeneral>
        <BtnGeneral onClick={() => zoneHandler("turizm sektoru", 80)}>
          Turizm Sektoru
          <div className="btn-price">80</div>
        </BtnGeneral>
        <BtnGeneral onClick={() => zoneHandler("ticarət zonası", 100)}>
          Ticarət Zonası
          <div className="btn-price">100</div>
        </BtnGeneral>
        <BtnGeneral onClick={() => zoneHandler("sosial zona", 50)}>
          Sosial Zona
          <div className="btn-price">50</div>
        </BtnGeneral>
      </div>
    </>
  );
}

export default RegionPanel;
