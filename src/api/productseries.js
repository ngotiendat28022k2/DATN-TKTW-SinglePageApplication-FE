import instance from "./config";

const productSeriesApi = {
    List: async () => {
        return await instance.get("product-series");
    },
    Detail: async (id) => {
        return await instance.get(`product-series/${id}`);
    },
    Add: async (data) => {
        return await instance.post("product-series", data);
    },
    Update: async (data) => {
        return await instance.put(`product-series/${data._id}`, data);
    },
    Remove: async (id) => {
        return await instance.delete(`product-series/${id}`);
    },
};

export default productSeriesApi;
