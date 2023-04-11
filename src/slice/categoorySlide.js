import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryApi from "../api/category";

export const getAllCategory = createAsyncThunk(
  "product/getAllCategory",
  async () => {
    const response = await categoryApi.List();
    return response;
  }
);

const initialState = {
  value: [],
  search: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategory.fulfilled, (state, action) => {
      state.value = action.payload.data.data;
      if (!state.value.length) return;
    });
  },
});

export default categorySlice.reducer;
