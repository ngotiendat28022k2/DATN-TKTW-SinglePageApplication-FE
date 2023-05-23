import { Http } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import infomationPageApi from "../api/infomationPage";

export const getInfomationPage = createAsyncThunk(
    "infomationPage/get",
    async (id) => {
        const respone = await infomationPageApi.Read(id);
        return respone;
    }
);

export const AddNewInfomationPage = createAsyncThunk(
    "infomationPage/add",
    async (data) => {
        await infomationPageApi.Add(data);
        const response = await infomationPageApi.List();
        return response;
    }
);

export const getAllInformationPage = createAsyncThunk(
    "infomationPage/getAllInformationPage",
    async () => {
        const response = await infomationPageApi.List();
        return response;
    }
);
export const RemoveInformation = createAsyncThunk(
    "infomationPage/remove",
    async (id) => {
        console.log("id", id);
        await infomationPageApi.Remove(id);
        const respone = infomationPageApi.List();
        return respone;
    }
);

export const UpdateInformation = createAsyncThunk(
    "infomationPage/update",
    async (data) => {
        try {
            await infomationPageApi.Update(data);
            const response = await infomationPageApi.List();
            return response;
        } catch (error) {
            throw error;
        }
    }
);

export const searchInfor = createAsyncThunk(
    "information/search",
    async (data) => {
        const res = await infomationPageApi.SearchInfor(data);
        return res;
    }
);

const initialState = {
    value: [],
    search: [],
};

export const infomationPageSlice = createSlice({
    name: "infomationPage",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getInfomationPage.fulfilled, (state, action) => {
            if (action.payload.successCode) {
                state.value = action.payload.data;
            }
        });
        builder.addCase(getAllInformationPage.fulfilled, (state, action) => {
            if (action.payload.successCode) {
                state.value = action.payload.data;
            }
        });
        builder.addCase(AddNewInfomationPage.fulfilled, (state, action) => {
            if (action.payload.successCode) {
                state.value = action.payload.data;
            }
        });
        builder.addCase(RemoveInformation.fulfilled, (state, action) => {
            if (action.payload.successCode) {
                state.value = action.payload.data;
            }
        });
        builder.addCase(UpdateInformation.fulfilled, (state, action) => {
            if (action.payload.successCode) {
                state.value = action.payload.data;
            }
        });
        builder.addCase(searchInfor.fulfilled, (state, action) => {
            state.search = action.payload.data.data;
        });
    },
});

export default infomationPageSlice.reducer;
