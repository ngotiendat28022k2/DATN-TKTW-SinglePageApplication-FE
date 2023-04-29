import instance from "./config";

const productApi = {
  ProductList: async () => {
    return await instance.get("product");
  },
  ProductDetail: async (id) => {
    return await instance.get(`product/${id}`);
  },
  ProductAdd: async (product) => {
    return await instance.post("product", product);
  },
  ProductUpdate: async (product) => {
    return await instance.put(`product/${product._id}`, product);
  },
  RemoveProduct: async (id) => {
    return await instance.delete(`product/${id}`);
  },
  SearchProduct: async (data) => {
    return await instance.get(
      `search-product?search=${data?.search}&price=${data?.price}&authors=${data?.authors}&formbooks=${data?.formbooks}&supplieres=${data?.supplieres}`
    );
  },
};

export default productApi;
