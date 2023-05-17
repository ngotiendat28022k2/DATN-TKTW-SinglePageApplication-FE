import instance from "./config";

const voucherApi = {
  VoucherList: async () => {
    return await instance.get("voucher");
  },
  VoucherDetail: async (id) => {
    return await instance.get(`voucher/${id}`);
  },
  VoucherAdd: async (voucher) => {
    return await instance.post("voucher", voucher);
  },
  VoucherUpdate: async (voucher) => {
    return await instance.put(`voucher/${voucher._id}`, voucher);
  },
  RemoveVoucher: async (id) => {
    return await instance.delete(`voucher/${id}`);
  },
};

export default voucherApi;
