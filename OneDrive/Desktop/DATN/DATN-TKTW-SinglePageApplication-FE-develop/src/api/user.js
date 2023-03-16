import instance from "./config";

const userApi = {
  login: async (data) => {
    await instance.post("login", data);
  },
  register: async (data) => {
    await instance.post("register", data);
  },
};

export default userApi;
