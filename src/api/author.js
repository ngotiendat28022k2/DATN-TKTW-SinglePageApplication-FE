import instance from "./config";

const authorApi = {
    AuthorList: async () => {
        return await instance.get("authors");
    },
    AuthorDetail: async (id) => {
        return await instance.get(`authors/${id}`);
    },
    AuthorAdd: async (data) => {
        return await instance.post("authors", data);
    },
    AuthorUpdate: async (data) => {
        return await instance.put(`authors/${data._id}`, data);
    },
    RemoveAuthor: async (id) => {
        return await instance.delete(`authors/${id}`);
    },
    SearchAuthor: async (data) => {
        return await instance.get(`search-author?search=${data?.search}`);
    },
};

export default authorApi;
