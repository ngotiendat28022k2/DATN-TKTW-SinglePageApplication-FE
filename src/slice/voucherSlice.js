import { Http } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import voucherApi from "../api/voucher";

export const getAllVoucher = createAsyncThunk("voucher/getAll", async () => {
  const response = await voucherApi.VoucherList();
  return response;
});

export const getVoucher = createAsyncThunk("voucher/get", async (id) => {
  console.log("id", id);
  const respone = await voucherApi.VoucherDetail(id);
  return respone;
});

export const AddNewVoucher = createAsyncThunk(
  "voucher/Add",
  async (voucher) => {
    const response = await voucherApi.VoucherAdd(voucher);
    return response;
  }
);

export const RemoveVoucher = createAsyncThunk("voucher/remove", async (id) => {
  await voucherApi.RemoveVoucher(id);
  const respone = voucherApi.VoucherList();
  return respone;
});

export const UpdateVoucher = createAsyncThunk(
  "voucher/update",
  async (data) => {
    try {
      await voucherApi.VoucherUpdate(data);
      const response = await voucherApi.VoucherList();
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  value: [],
  search: [],
};

export const voucherhSlice = createSlice({
  name: "voucher",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllVoucher.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.value = action.payload.data;
      }
    });
    builder.addCase(AddNewVoucher.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.value = action.payload.data;
      }
    });
    builder.addCase(RemoveVoucher.fulfilled, (state, action) => {
      state.value = action.payload.data;
    });
    builder.addCase(UpdateVoucher.fulfilled, (state, action) => {
      state.value = action.payload.data;
    });
  },
});

export default voucherhSlice.reducer;
