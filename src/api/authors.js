import instance from "./config";

const authorsApi = {
    authorsList: async () => {
        return await instance.get("authors");
    },
    authorDetail: async (id) => {
        return await instance.get(`authors/${id}`);
    },
    //   Add: async (category) => {
    //     return await instance.post("formbooks", category);
    //   },
    //   Update: async (category) => {
    //     return await instance.put(`formbooks/${category.id}`, category);
    //   },
    //   Remove: async (id) => {
    //     return await instance.delete(`formbooks/${id}`);
    //   },
};

export default authorsApi;
