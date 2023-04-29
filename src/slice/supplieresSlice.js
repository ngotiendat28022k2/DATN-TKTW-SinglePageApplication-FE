import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supplierApi from "../api/supplieres";

export const getAllSupplier = createAsyncThunk(
  "supplier/getAllSupplier",
  async () => {
    const response = await supplierApi.SupplierList();
    return response;
  }
);

export const getSupplier = createAsyncThunk("supplier/get", async (id) => {
  console.log("id", id);
  const respone = await supplierApi.SupplierDetail(id);
  return respone;
});

export const AddNewSupplier = createAsyncThunk(
  "supplier/AddNewSupplier",
  async (supplier) => {
    await supplierApi.SupplierAdd(supplier);
    const response = supplierApi.SupplierList();
    return response;
  }
);

export const RemoveSupplier = createAsyncThunk(
  "supplier/remove",
  async (id) => {
    console.log("id", id);
    await supplierApi.RemoveSupplier(id);
    const respone = supplierApi.SupplierList();
    return respone;
  }
);

export const UpdateSupplier = createAsyncThunk(
  "supplier/update",
  async (id, data) => {
    await supplierApi.SupplierUpdate(id, data);
    const respone = supplierApi.SupplierList();
    return respone;
  }
);

const initialState = {
  value: [],
  search: [],
};

export const supplierSlice = createSlice({
  name: "supplier",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllSupplier.fulfilled, (state, action) => {
      state.value = action.payload.data.data;
    });

    builder.addCase(AddNewSupplier.fulfilled, (state, action) => {
      state.value = action.payload.data.data;
    });
    builder.addCase(RemoveSupplier.fulfilled, (state, action) => {
      state.value = action.payload.data.data;
    });
    builder.addCase(UpdateSupplier.fulfilled, (state, action) => {
      state.value = action.payload.data.data;
    });
  },
});

export default supplierSlice.reducer;
