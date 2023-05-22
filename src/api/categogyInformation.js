import instance from "./config";

const categoryInformationAPI = {
    List: async () => {
        return await instance.get("/categories-information");
    },
    Detail: async (id) => {
        return await instance.get(`/categories-information/${id}`);
    },
    Add: async (data) => {
        return await instance.post("/categories-information", data);
    },
    Update: async (data) => {
        return await instance.put(`/categories-information/${data._id}`, data);
    },
    Remove: async (id) => {
        return await instance.delete(`/categories-information/${id}`);
    },
};

export default categoryInformationAPI;
