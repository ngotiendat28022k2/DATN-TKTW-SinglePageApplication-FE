import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import local from "../../../utiliti/local/localSesion";

const Thank = () => {
  const [user, setUser] = useState(local.get("user"))
  return (
    <div className="flex justify-center items-center h-[100vh] bg-[#3bb454]">
      <div>
      <div className="block text-center"><span>Đặt Đơn hàng thành công</span></div>
      <div className="block mt-[20px] text-center">
        <Link to="/"><Button variant="contained" sx={{marginRight:"20px"}}>Về trang chủ</Button></Link>
        <Link to={`/account/order/${user._id}`}><Button variant="contained">Xem trạng thái đơn hàng</Button></Link>
      </div>
      </div>
    </div>
  );
};

export default Thank;
