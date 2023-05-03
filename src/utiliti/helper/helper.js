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

helper.maskPrice = (e) => {
  let value = e.target.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{3})$/, "$1.$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  e.target.value = value;
  return e;
};

helper.maskValuePrice = (e) => {
  if (!e) {
    return e;
  }
  let value = e.toString();
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{3})$/, "$1.$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  e = value;
  return e;
};

helper.userRole = (role) => {
  console.log("role", role);
  switch (role) {
    case 0:
      role = "Người dùng";
      break;
    case 1:
      role = "Admin";
      break;
    case 0:
      role = "Quản trị viên";
      break;
    default:
      role = "Khách";
  }
  return role;
};
export default helper;
