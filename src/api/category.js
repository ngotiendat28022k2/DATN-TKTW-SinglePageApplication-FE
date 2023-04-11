import instance from "./config";

const categoryApi = {
    CategoryList: async () => {
        return await instance.get("categories");
      }
}

export default categoryApi;