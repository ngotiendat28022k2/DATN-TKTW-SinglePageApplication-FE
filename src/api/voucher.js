import instance from "./config";

const voucherAPI = {
    voucherList: async () => {
        return await instance.get("voucher");
    },
    voucherDetail: async (id) => {
        return await instance.get(`voucher/${id}`);
    },
    voucherAdd: async (voucher) => {
        return await instance.post("voucher", voucher);
    },
    voucherUpdate: async (voucher) => {
        return await instance.put(`voucher/${voucher._id}`, voucher);
    },
    removeVoucher: async (id) => {
        return await instance.delete(`voucher/${id}`);
    },
};
export default voucherAPI;
