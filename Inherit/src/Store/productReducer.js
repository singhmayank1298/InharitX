import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "Items",
  initialState: { products: [] },
  reducers: {
    allItems(state, { payload }) {
      state.products = payload;
    },
    addProduct(state, { payload }) {
      state.products = [...state.products, payload];
      //   console.log(payload);
      //   let a = [...state.products, payload];
      //   return a;
    },
  },
});

export const productAction = productSlice.actions;
export default productSlice.reducer;
