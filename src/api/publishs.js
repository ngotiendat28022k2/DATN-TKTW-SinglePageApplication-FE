import instance from "./config";

const publishApi = {
    PublishList: async () => {
        return await instance.get("publishs");
    },
    PublishDetail: async (id) => {
        return await instance.get(`publishs/${id}`);
    },
    PublishAdd: async (publish) => {
        return await instance.post("publishs", publish);
    },
    PublishUpdate: async (publish) => {
        return await instance.put(`publishs/${publish._id}`, publish);
    },
    RemovePublish: async (id) => {
        return await instance.delete(`publishs/${id}`);
    },
    SearchPublish: async (data) => {
        return await instance.get(`search-publishing?search=${data?.search}`);
    },
};

export default publishApi;
