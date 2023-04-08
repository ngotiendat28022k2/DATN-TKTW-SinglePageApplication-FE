import instance from "./config";

const categoryApi = {
  CategoryList: async () => {
    return await instance.get("categories");
  },
  CategoryDetail: async(id)=>{
    return await instance.get(`categories/${id}`)
  },
  CategoryAdd: async(category)=>{
    return await instance.post("categories", category)
  },
  CategoryUpdate: async(category)=>{
    return await instance.put(`categories/${category.id}`,category)
  },
  RemoveCategory: async(id)=>{
    return await instance.delete(`categories/${id}`)
  }
};

export default categoryApi;
