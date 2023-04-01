import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../api/products";

export const getAllProduct = createAsyncThunk("product/getAllProduct", async () => {
  const response = await productApi.ProductList();
  return response;
});

export const getProduct = createAsyncThunk("product/:id", async (id) => {
  console.log("id", id);
  const respone = await productApi.ProductDetail(id);
  return respone;
})

export const AddNewProduct = createAsyncThunk("product/AddNewProduct", async (product) => {
  const response = await productApi.ProductAdd(product);
  return response;
});

export const RemoveProduct = createAsyncThunk("product/:id", async (id) => {
  console.log("id", id);
  const respone = await productApi.RemoveProduct(id);
  return respone;
})

const initialState = {
  value: [],
  search: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.value = action.payload;
      if (!state.value.length) return;
    });
    // builder.addCase(getProduct.fulfilled, (state, action) => {
    //   state.value = action.payload;
    //   if (!state.value.length) return;
    // });
    builder.addCase(AddNewProduct.fulfilled, (state, action) => {
      state.value = action.payload;
      if (!state.value.length) return;
    });
    builder.addCase(RemoveProduct.fulfilled, (state, action) => {
      state.value = action.payload;
      if (!state.value.length) return;
    })
  },
});

export default productSlice.reducer;
