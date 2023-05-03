import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../api/products";

export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async () => {
    const response = await productApi.ProductList();
    return response;
  }
);

export const getProduct = createAsyncThunk("product/get", async (id) => {
  const res = await productApi.ProductDetail(id);

  return res;
});

export const AddNewProduct = createAsyncThunk(
  "product/AddNewProduct",
  async (product) => {
    await productApi.ProductAdd(product);
    const response = await productApi.ProductList();
    return response;
  }
);

export const RemoveProduct = createAsyncThunk("product/remove", async (id) => {
  console.log("id", id);
  await productApi.RemoveProduct(id);
  const respone = productApi.ProductList();
  return respone;
});

export const UpdateProduct = createAsyncThunk(
  "product/update",
  async (data) => {
    await productApi.ProductUpdate(data);
    const respone = productApi.ProductList();
    return respone;
  }
);

export const searchProduct = createAsyncThunk(
  "product/search",
  async (data) => {
    const res = await productApi.SearchProduct(data);
    return res;
  }
);

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
      state.value = action.payload.data;
    });
    builder.addCase(AddNewProduct.fulfilled, (state, action) => {
      state.value = action.payload.data;
    });
    builder.addCase(RemoveProduct.fulfilled, (state, action) => {
      state.value = action.payload.data;
    });
    builder.addCase(UpdateProduct.fulfilled, (state, action) => {
      state.value = action.payload.data;
    });
    builder.addCase(searchProduct.fulfilled, (state, action) => {
      state.search = action.payload.data.data;
    });
  },
});

export default productSlice.reducer;
