import instance from "./config";

const publishingApi = {
    publishingList: async () => {
    return await instance.get("publishing");
  },
};

export default publishingApi;
