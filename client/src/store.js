import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./state";

const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});

export default store;
