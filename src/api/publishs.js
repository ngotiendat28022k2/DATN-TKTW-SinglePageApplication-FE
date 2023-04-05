import instance from "./config";

const publishApi = {
  PublishList: async () => {
    return await instance.get("publishs");
  },
  PublishDetail: async(id)=>{
    return await instance.get(`publishs/${id}`)
  },
  PublishAdd: async(publish)=>{
    return await instance.post("publish", publish)
  },
  PublishUpdate: async(publish)=>{
    return await instance.put(`publishs/${publish.id}`,publish)
  },
  RemovePublish: async(id)=>{
    return await instance.delete(`publishs/${id}`)
  }
};

export default publishApi;
