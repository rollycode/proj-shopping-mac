import { configureStore } from "@reduxjs/toolkit";
import cartReucer from "./slice/cartSlice";
import tabReducer from "./slice/tabSlice";

const appStore = configureStore({
  reducer: { cart: cartReucer, tab: tabReducer },
});

export default appStore;
