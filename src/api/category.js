import instance from "./config";

const categoryApi = {
  List: async () => {
    return await instance.get("categories");
  },
  Detail: async (id) => {
    return await instance.get(`categories/${id}`);
  },
  Add: async (category) => {
    return await instance.post("categories", category);
  },
  Update: async (category) => {
    return await instance.put(`categories/${category.id}`, category);
  },
  Remove: async (id) => {
    return await instance.delete(`categories/${id}`);
  },
};

export default categoryApi;
