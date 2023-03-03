import React from "react";
import { useNavigate } from "react-router-dom";

const PrivateLayout = ({ children }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("User"));
  if (!user) {
    navigate("/login");
  }
  return children;
};

export default PrivateLayout;
