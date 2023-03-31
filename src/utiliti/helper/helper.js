import { toast } from "react-toastify";

const helper = {};
helper.toast = (type, content, disableAutoClose) => {
  let autoClose = 3000;
  if (disableAutoClose) {
    autoClose = false;
  }
  if (type) {
    toast[type](Toast(type, content), {
      position: toast.POSITION.TOP_RIGHT,
      autoClose,
    });
  } else {
    toast(Toast(type, content), {
      position: toast.POSITION.TOP_RIGHT,
      autoClose,
    });
  }
};

const Toast = (type, content) => {
  // console.log("content", content);
  // console.log("type", type);
  let res;
  if (type === "success") {
    res = content ? content : "Success";
  } else if (type === "error") {
    res = !content ? "Error" : content;
  }
  return res;
};
export default helper;
