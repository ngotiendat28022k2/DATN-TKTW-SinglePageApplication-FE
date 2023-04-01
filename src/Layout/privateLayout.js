import React from "react";
import { useNavigate } from "react-router-dom";
import local from "../utiliti/local/local";

const PrivateLayout = ({ children }) => {
  const navigate = useNavigate();
  const user = local.get("user");
  console.log("user", user);
  if (!user) {
    navigate("/login");
    location.href = "/login";
  }
  return children;
};

export default PrivateLayout;
