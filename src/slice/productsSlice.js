import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../api/products";
export const fetchs = createAsyncThunk("product/fetch", async () => {
  const response = await productApi.ProductList();
  return response;
});

const initialState = {
  value: [],
  search: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchs.fulfilled, (state, action) => {
      state.value = action.payload;
      if (!state.value.length) return;
    });
  },
});

export default productSlice.reducer;
