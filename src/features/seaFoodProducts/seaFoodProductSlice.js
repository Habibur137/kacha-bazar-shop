import { createSlice } from "@reduxjs/toolkit";
import products from "./seaFoodProductApi";

const initialState = {
  count: 0,
  products: products,
};

export const seaFoodProductSlice = createSlice({
  name: "seaFood",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += 1;
      state.products.map((product) => {
        if (product.id === action.payload) {
          return {
            quantity: (product.quantity += 1),
            stock: product.stock - 1,
          };
        } else {
          return product;
        }
      });
    },
    decrement: (state, action) => {
      state.count -= 1;
      state.products.map((product) => {
        if (product.id === action.payload) {
          return {
            quantity: (product.quantity -= 1),
            stock: product.stock + 1,
          };
        } else {
          return product;
        }
      });
    },
  },
});

export const { increment, decrement } = seaFoodProductSlice.actions;
export default seaFoodProductSlice.reducer;
