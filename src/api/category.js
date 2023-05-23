import instance from "./config";

const categoryApi = {
    List: async () => {
        return await instance.get("categories");
    },
    Detail: async (id) => {
        return await instance.get(`categories/${id}`);
    },
    Add: async (data) => {
        return await instance.post("categories", data);
    },
    Update: async (data) => {
        return await instance.put(`categories/${data._id}`, data);
    },
    Remove: async (id) => {
        return await instance.delete(`categories/${id}`);
    },
    SearchCate: async (data) => {
        return await instance.get(`search-categories?search=${data?.search}`);
    },
};

export default categoryApi;
