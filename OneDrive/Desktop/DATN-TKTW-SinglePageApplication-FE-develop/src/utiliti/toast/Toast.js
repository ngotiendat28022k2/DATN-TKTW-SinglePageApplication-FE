// import React from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// // Call it once in your app. At the root of your app is the best place
// toast.configure();

// const Toast = (type, content) => {
//   if (type === "success") {
//     content = content ? content : "Success";
//   } else if (type === "error") {
//     content = !content ? "Error" : content;
//   }
//   return content;
// };

// const ToastContainer = (type, content, disableAutoClose) => {
//   console.log(type, content);
//   let autoClose = 3000;
//   if (disableAutoClose) {
//     autoClose = false;
//   }
//   if (type) {
//     toast[type](Toast(type, content), {
//       position: toast.POSITION.TOP_RIGHT,
//       autoClose,
//     });
//   } else {
//     toast(Toast(type, content), {
//       position: toast.POSITION.TOP_RIGHT,
//       autoClose,
//     });
//   }
// };

const ToastContainer = () => {
  console.log("toast");
};
export default ToastContainer;
