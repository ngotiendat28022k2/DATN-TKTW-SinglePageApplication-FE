import instance from "./config";

const supplierApi = {
  SupplierList: async () => {
    return await instance.get("supplieres");
  },
  SupplierDetail: async(id)=>{
    return await instance.get(`supplieres/${id}`)
  },
  SupplierAdd: async(supplier)=>{
    return await instance.post("supplieres/add", supplier)
  },
  SupplierUpdate: async(supplier)=>{
    return await instance.put(`supplieres/${supplier._id}`,supplier)
  },
  RemoveSupplier: async(id)=>{
    return await instance.delete(`supplieres/${id}`)
  }
};

export default supplierApi;
