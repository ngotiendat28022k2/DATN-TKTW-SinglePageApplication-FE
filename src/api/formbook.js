import instance from "./config";

const formBookApi = {
  FormBookList: async () => {
    return await instance.get("formbooks");
  },
  FormBookDetail: async (id) => {
    return await instance.get(`formbooks/${id}`);
  },
  FormBookAdd: async (data) => {
    return await instance.post("formbooks", data);
  },
  FormBookUpdate: async (data) => {
    return await instance.put(`formbooks/${data._id}`, data);
  },
  RemoveFormBook: async (id) => {
    return await instance.delete(`formbooks/${id}`);
  },
};

export default formBookApi;
