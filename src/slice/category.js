import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryApi from "../api/category";

export const getAllCategory = createAsyncThunk("categories/getAllCategory", async () => {
  const response = await categoryApi.CategoryList();
  return response;
});

const initialState = {
  value: [],
  search: [],
};

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategory.fulfilled, (state, action) => {
      state.value = action.payload;
      if (!state.value.length) return;
    });
  },
});

export default categorySlice.reducer;
