import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import seaFoodProductReducer from "../features/seaFoodProducts/seaFoodProductSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    seaFoodProducts: seaFoodProductReducer,
  },
});
