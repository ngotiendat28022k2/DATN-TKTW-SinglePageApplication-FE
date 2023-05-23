import instance from "./config";

const infomationPageApi = {
    Read: async (id) => {
        return await instance.get(`infomationPage/${id}`);
    },

    Add: async (data) => {
        return await instance.post("infomationPage", data);
    },

    List: async () => {
        return await instance.get("infomationPage");
    },

    Update: async (data) => {
        return await instance.put(`infomationPage/${data._id}`, data);
    },
    Remove: async (id) => {
        return await instance.delete(`infomationPage/${id}`);
    },
    SearchInfor: async (data) => {
        return await instance.get(`search-information?search=${data?.search}`);
    },
};

export default infomationPageApi;
