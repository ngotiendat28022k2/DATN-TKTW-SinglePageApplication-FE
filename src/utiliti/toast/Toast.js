import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toast = {};
toast.Toast = (type, content) => {
  if (type === "success") {
    content = content ? content : "Success";
  } else if (type === "error") {
    content = !content ? "Error" : content;
  }
  return content;
};

toast.ToastContainer = (type, content, disableAutoClose) => {
  console.log(type, content);
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

export default toast;
