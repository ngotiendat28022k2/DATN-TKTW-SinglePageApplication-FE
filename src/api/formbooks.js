import instance from "./config";

const formBookApi = {
    formBookList: async () => {
        return await instance.get("formbooks");
    },
    formBookDetail: async (id) => {
        return await instance.get(`formbooks/${id}`);
    },
};

export default formBookApi;
