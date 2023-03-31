import instance from "./config";

const productApi = {
  ProductList: async () => {
    return await instance.get("product");
  },
};

export default productApi;
