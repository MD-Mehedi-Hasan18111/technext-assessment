import { configureStore } from "@reduxjs/toolkit";
import flightSlice from "./slice";

const store = configureStore({
  reducer: {
    flightSlice: flightSlice,
  },
});

export default store;
