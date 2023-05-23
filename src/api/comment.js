import instance from "./config";

const commentApi = {
  commentProductsList: async (id) => {
    return await instance.get(`product-with-comment`);
  },

  reportProductsList: async (id) => {
    return await instance.get(`product-with-report`);
  },

  commentList: async (id) => {
    return await instance.get(`comments/${id}`);
  },
  commentDetail: async (id) => {
    return await instance.get(`comment/${id}`);
  },
  commentAdd: async (data) => {
    return await instance.post(`comment`, data);
  },
  commentUpdate: async (data) => {
    return await instance.put(`comment/${data._id}`, data);
  },
  RemoveComment: async (id) => {
    return await instance.delete(`comment/${id}`);
  },
  RemoveReport: async (id) => {
    return await instance.delete(`reportComment/${id}`);
  },
  isCommentReport: async (data) => {
    return await instance.get(
      `reportComment/${data.commentId}/${data.reporterId}`
    );
  },
  ReportComment: async (data) => {
    return await instance.post(`reportComment`, data);
  },
};

export default commentApi;
