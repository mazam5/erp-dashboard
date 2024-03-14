import { configureStore, createSlice } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { orders, products } from "../data";

const erpSlice = createSlice({
  name: "erp",
  initialState: {
    orders: orders,
    products: products,
  },
  reducers: {
    // products
    addProduct: (state, action) => {
      state.products.push(action.payload);
      // console.log("product added", state.products, action.payload);
    },
    editProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id,
      );
      state.products[index] = action.payload;
      // console.log("product edited", state.products, action.payload);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload,
      );
      // console.log("product deleted", state.products, action.payload);
    },
    // orders
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order.orderId !== action.payload,
      );
      // console.log("order deleted", state.orders, action.payload);
    },
    editOrder: (state, action) => {
      const index = state.orders.findIndex(
        (order) => order.orderId === action.payload.orderId,
      );
      state.orders[index] = action.payload;
      // console.log("order edited", state.orders, action.payload);
    },
  },
});
const store = configureStore({
  reducer: erpSlice.reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export const actions = erpSlice.actions;
export const {
  addProduct,
  editProduct,
  deleteProduct,
  deleteOrder,
  editOrder,
} = erpSlice.actions;

export default store;
