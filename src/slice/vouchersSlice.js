import { Http } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import voucherAPI from "../api/voucher";

export const getAllVoucher = createAsyncThunk("voucher/getAll", async () => {
    const response = await voucherAPI.voucherList();
    return response;
});

export const getVoucher = createAsyncThunk("voucher/get", async (id) => {
    console.log("id", id);
    const respone = await voucherAPI.voucherDetail(id);
    return respone;
});

export const AddNewVoucher = createAsyncThunk(
    "voucher/AddNewVoucher",
    async (voucher) => {
        await voucherAPI.voucherAdd(voucher);
        const response = voucherAPI.voucherList();
        return response;
    }
);

export const RemoveVoucher = createAsyncThunk("voucher/remove", async (id) => {
    console.log("id", id);
    await voucherAPI.removeVoucher(id);
    const respone = voucherAPI.voucherList();
    return respone;
});

export const UpdateVoucher = createAsyncThunk(
    "voucher/update",
    async (data) => {
        try {
            await voucherAPI.voucherUpdate(data);
            const response = await voucherAPI.voucherList();
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

export const voucherSlice = createSlice({
    name: "voucher",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllVoucher.fulfilled, (state, action) => {
            if (action.payload.successCode) {
                state.value = action.payload.data;
            }
        });

        builder.addCase(AddNewVoucher.fulfilled, (state, action) => {
            if (action.payload.successCode) {
                state.value = action.payload.data;
            }
        });
        builder.addCase(RemoveVoucher.fulfilled, (state, action) => {
            if (action.payload.successCode) {
                state.value = action.payload.data;
            }
        });
        builder.addCase(UpdateVoucher.fulfilled, (state, action) => {
            if (action.payload.successCode) {
                state.value = action.payload.data;
            }
        });
    },
});

export default voucherSlice.reducer;
