import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../api/user";
import local from "../utiliti/local/local";

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

export const getAllUserClient = createAsyncThunk(
    "user/getall",
    async (data) => {
        const response = await userApi.getAll();
        return response;
    }
);
export const getUserClient = createAsyncThunk("user/get", async (id) => {
    const response = await userApi.get(id);
    return response;
});

export const getAllUserRoot = createAsyncThunk(
    "user/getAllRoot",
    async (data) => {
        const response = await userApi.getRootAll();
        return response;
    }
);

export const AddUser = createAsyncThunk("user/add", async (data) => {
    await userApi.add(data);
    const response = await userApi.getAll();
    return response;
});

export const UpdateUser = createAsyncThunk("user/update", async (data) => {
    await userApi.update(data);
    console.log("data", data);
    const response = await userApi.getAll();
    return response;
});

export const RemoveUser = createAsyncThunk("user/remove", async (id) => {
    await userApi.remove(id);
    const response = await userApi.getAll();
    return response;
});

const initialState = {
    value: [],
    user: {},
    isLogin: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logOut: (state) => {
            local.clear();
            return {
                ...state,
                isLogin: false,
                user: {},
            };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            if (action.payload.errorCode) {
                return {
                    ...state,
                    isLogin: false,
                    user: {},
                };
            } else {
                state.user = action.payload.data;
                state.isLogin = true;
            }
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.otp = action.payload;
            state.isLogin = false;
        });

        builder.addCase(sendOtp.fulfilled, (state, action) => {
            console.log("user send otp slice", action.payload);
        });
        builder.addCase(getUserClient.fulfilled, (state, action) => {
            state.value = action.payload.data;
        });
        builder.addCase(AddUser.fulfilled, (state, action) => {
            state.value = action.payload.data;
        });

        builder.addCase(UpdateUser.fulfilled, (state, action) => {
            state.value = action.payload.data;
        });

        builder.addCase(RemoveUser.fulfilled, (state, action) => {
            state.value = action.payload.data;
        });
    },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
