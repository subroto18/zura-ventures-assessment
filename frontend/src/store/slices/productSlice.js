import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productApiloading: false,
  productApiFailed: false,
  productData: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateProductStatus: (state, action) => {
      console.log(action, "action");
      state.productApiloading = action.payload.loading;
      state.productApiFailed = action.payload.apiError;
      state.productData = action.payload.data;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateProductStatus } = productSlice.actions;

export default productSlice.reducer;
