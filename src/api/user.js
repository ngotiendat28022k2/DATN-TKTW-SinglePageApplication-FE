import instance from "./config";

const userApi = {
  login: async (data) => {
    return await instance.post("login", data);
  },
  register: async (data) => {
    return await instance.post("register", data);
  },
};

export default userApi;
