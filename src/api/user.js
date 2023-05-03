import instance from "./config";

const userApi = {
  login: async (data) => {
    return await instance.post("login", data);
  },
  register: async (data) => {
    return await instance.post("register", data);
  },
  sendOtp: async (data) => {
    return await instance.post("verifyotp", data);
  },
  getAll: async () => {
    return await instance.get("user");
  },
  getRootAll: async () => {
    return await instance.get("userroot");
  },
  get: async (id) => {
    return await instance.get(`user/${id}`);
  },
  add: async (data) => {
    return await instance.post("user", data);
  },
  update: async (data) => {
    return await instance.put(`user/${data._id}`, data);
  },
  remove: async (id) => {
    return await instance.delete(`user/${id}`);
  },
};

export default userApi;
