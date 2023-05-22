import instance from "./config";

const addressUserApi = {
  addressUserList: async (id) => {
    return await instance.get(`info-user/${id}`);
  },
  addressUserIsActive: async (id) => {
    return await instance.get(`info-active/${id}`);
  },
  addressUserAdd: async (data) => {
    return await instance.post("info-user", data);
  },
  addressUserUpdate: async (data) => {
    return await instance.put(`info-user/${data._id}`, data);
  },
  RemoveaddressUser: async (id) => {
    return await instance.delete(`info-user/${id}`);
  },
};

export default addressUserApi;
