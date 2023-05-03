import { Http } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryApi from "../api/category";

export const getAllCategory = createAsyncThunk(
  "category/getAllCategory",
  async () => {
    const response = await categoryApi.List();
    return response;
  }
);

const initialState = {
  value: [],
  search: [],
};

export const navAdminSlice = createSlice({
  name: "navAdmin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default navAdminSlice.reducer;
