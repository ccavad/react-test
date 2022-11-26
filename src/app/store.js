import { configureStore } from "@reduxjs/toolkit";
import regionsSlice from "../features/regionsSlice";
import zoneSlice from "../features/zoneSlice";
import resourcesSlice from "../features/resourcesSlice";

export const store = configureStore({
  reducer: {
    resources: resourcesSlice,
    regions: regionsSlice,
    zones: zoneSlice,
  },
});
