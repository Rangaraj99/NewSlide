import { configureStore } from "@reduxjs/toolkit";
import textAreasReducer from "./textAreasSlice";

const store = configureStore({
  reducer: {
    textAreas: textAreasReducer,
  },
});

export default store;
