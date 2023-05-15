import instance from "./config";

const cartApi = {
  CartList: async (id) => {
    return await instance.get(`carts/${id}`);
  },
  CartRead: async (id) => {
    return await instance.get(`cart/${id}`);
  },
  CartAdd: async (data) => {
    return await instance.post("cart", data);
  },
  CartUpdate: async (data) => {
    return await instance.put(`cart/${data._id}`, data);
  },
  RemoveCart: async (id) => {
    return await instance.delete(`cart/${id}`);
  },
};

export default cartApi;
