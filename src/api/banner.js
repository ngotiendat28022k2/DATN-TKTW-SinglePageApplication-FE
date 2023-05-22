import instance from "./config";

const bannerApi = {
  BannerList: async () => {
    return await instance.get("banner");
  },
  BannerDetail: async (id) => {
    return await instance.get(`banner/${id}`);
  },
  BannerAdd: async (data) => {
    return await instance.post("banner", data);
  },
  BannerUpdate: async (data) => {
    return await instance.put(`banner/${data._id}`, data);
  },
  RemoveBanner: async (id) => {
    return await instance.delete(`banner/${id}`);
  },
};

export default bannerApi;
