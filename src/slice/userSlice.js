import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../api/user";

export const login = createAsyncThunk("user/login", async (data) => {
  const response = await userApi.login(data);
  return response;
});

export const register = createAsyncThunk("user/register", async (data) => {
  const response = await userApi.register(data);
  return response;
});

export const sendOtp = createAsyncThunk("user/sendOtp", async (data) => {
  const response = await userApi.sendOtp(data);
  return response;
});

const initialState = {
  value: [],
  isLogin: false,
  otp: [],
};

export const userSlice = createSlice({
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
    builder.addCase(login.rejected, (state, action) => {
      throw new Error();
      state.isLogin = false;
    });

    builder.addCase(register.fulfilled, (state, action) => {
      state.otp = action.payload;
      state.isLogin = false;
    });
    builder.addCase(register.rejected, (state, action) => {
      throw new Error();
    });

    builder.addCase(sendOtp.fulfilled, (state, action) => {
      state.otp = action.payload;
      state.isLogin = false;
    });
    builder.addCase(sendOtp.rejected, (state, action) => {
      throw new Error();
    });
  },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
