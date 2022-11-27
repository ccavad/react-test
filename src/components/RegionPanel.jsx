import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { spend } from "../features/resourcesSlice";
import { setZoneName, setZoneState } from "../features/regionsSlice";
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
  let currentReg = regions[id];

  return (
    <div>
      <h1 onClick={() => console.table(currentReg.zoneState)}>
        {currentReg.ad}
      </h1>
      {!currentReg.zone && <ZoneSelect id={id} />}
      {currentReg.zone === "kənd təsərrüfatı" && (
        <Agriculture regionState={currentReg.zoneState} regId={id} />
      )}
      {currentReg.zone === "sosial zona" && (
        <Social regionState={currentReg.zoneState} regId={id} />
      )}
      {currentReg.zone === "neft sektoru" && (
        <OilZone regionState={currentReg.zoneState} regId={id} />
      )}
      {currentReg.zone === "mədəniyyət zonası" && (
        <Culture regionState={currentReg.zoneState} regId={id} />
      )}
      {currentReg.zone === "ticarət zonası" && (
        <Trade regionState={currentReg.zoneState} regId={id} />
      )}
    </div>
  );
}

function ZoneSelect({ id }) {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.resources.value.money);
  const zones = useSelector((state) => state.zones.value);
  const regions = useSelector((state) => state.regions.value);

  function zoneHandler(name, zonePrice) {
    if (money.amount >= zonePrice) {
      dispatch(spend(zonePrice));
      switch (name) {
        case "agr":
          dispatch(setZoneName({ regId: id, name: "kənd təsərrüfatı" }));
          dispatch(
            setZoneState({ regId: id, zoneState: [...zones.agriculture] })
          );
          break;
        case "oil":
          dispatch(setZoneName({ regId: id, name: "neft sektoru" }));
          dispatch(
            setZoneState({
              regId: id,
              zoneState: { ...zones.oilZone },
            })
          );
          break;
        case "mil":
          dispatch(setZoneName({ regId: id, name: "hərbi zona" }));
          break;
        case "cul":
          dispatch(setZoneName({ regId: id, name: "mədəniyyət zonası" }));
          dispatch(
            setZoneState({
              regId: id,
              zoneState: [...zones.culture],
            })
          );
          break;
        case "tou":
          dispatch(setZoneName({ regId: id, name: "turizm sektoru" }));
          break;
        case "tra":
          dispatch(setZoneName({ regId: id, name: "ticarət zonası" }));
          dispatch(
            setZoneState({
              regId: id,
              zoneState: { ...zones.trade },
            })
          );
          break;
        case "soc":
          dispatch(setZoneName({ regId: id, name: "sosial zona" }));
          dispatch(
            setZoneState({
              regId: id,
              zoneState: [...zones.social],
            })
          );
          break;
      }
    }
  }

  return (
    <>
      <div>
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
    </>
  );
}

export default RegionPanel;
