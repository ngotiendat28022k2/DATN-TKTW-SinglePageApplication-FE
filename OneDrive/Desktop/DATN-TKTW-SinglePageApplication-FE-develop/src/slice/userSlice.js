import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../api/user";

export const login = createAsyncThunk("user/login", async (data) => {
  const response = await userApi.login(data);
  return response;
});

const initialState = {
  value: [],
  isLogin: false,
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.value = [];
      state.isLogin = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.value = action.payload;
      if (!state.value.length) return;
      state.isLogin = true;
    });
  },
});

export default counterSlice.reducer;
