import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import globalReducer from "./state";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { api } from "./state/api";

const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

export default store;
