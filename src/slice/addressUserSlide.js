import { Http } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import addressUserApi from "../api/addressUser";

export const getAllAddressUser = createAsyncThunk(
  "addressUser/getAll",
  async (id) => {
    const response = await addressUserApi.addressUserList(id);
    return response;
  }
);

export const addressUserIsActive = createAsyncThunk(
  "addressUser/get-isActive",
  async (id) => {
    const respone = await addressUserApi.addressUserIsActive(id);
    return respone;
  }
);

export const AddNewAddressUser = createAsyncThunk(
  "addressUser/add",
  async (data) => {
    const response = await addressUserApi.addressUserAdd(data);
    return response;
  }
);

export const RemoveAddressUser = createAsyncThunk(
  "addressUser/remove",
  async (id) => {
    const response = await addressUserApi.RemoveaddressUser(id);
    return response;
  }
);

export const UpdateAddressUser = createAsyncThunk(
  "addressUser/update",
  async (data) => {
    try {
      const response = await addressUserApi.addressUserUpdate(data);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  value: [],
  search: [],
  valueIsActive: [],
};

export const addressUserSlice = createSlice({
  name: "addressUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllAddressUser.fulfilled, (state, action) => {
      if (action.payload.successCode) {
        state.value = action.payload.data;
      }
    });

    builder.addCase(AddNewAddressUser.fulfilled, (state, action) => {
      if (action.payload.successCode) {
        state.value = action.payload.data;
      }
    });
    builder.addCase(UpdateAddressUser.fulfilled, (state, action) => {
      if (action.payload.successCode) {
        state.value = action.payload.data;
      }
    });
    builder.addCase(addressUserIsActive.fulfilled, (state, action) => {
      if (action.payload.successCode) {
        state.valueIsActive = action.payload.data;
      }
    });
  },
});

export default addressUserSlice.reducer;
