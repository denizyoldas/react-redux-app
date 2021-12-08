import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui";
import cartSlice from "./cart";

const store = configureStore(
  {
    reducer: {
      ui: uiSlice,
      cart: cartSlice,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
