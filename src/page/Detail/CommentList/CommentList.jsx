import React, { useState, useEffect } from "react";
import axios from "axios";
import local from "../../../utiliti/local/localSesion";
import { Link } from "react-router-dom";
import CreateComment from "./createComment/CreateComment";
import Popup from "../../../components/AdminComponent/MyPopup/MyPopup";
import {
  AddNewComment,
  UpdateComment,
  getAllComment,
} from "../../../slice/commentSlice";
import { useDispatch } from "react-redux";
import Comments from "./comments/Comments";
import helper from "../../../utiliti/helper/helper";
import AverageRating from "./ratingBar/RatingBar";

function CommentList({ user, product }) {
  const [openPopup, setOpenPopup] = useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const dispatch = useDispatch();
  const openInPopup = (item) => {
    setOpenPopup(true);
    setRecordForEdit(item);
  };
  const addOrEdit = async (values, resetForm) => {
    values.product = product;
    if(user) values.user = user;
    if (!values._id) {
      const { payload } = await dispatch(AddNewComment(values));
      console.log("payload", payload)
      if (payload?.success) {
        helper.toast("success", "Thanks for commenting");
        await dispatch(getAllComment(product._id))
      }
      setOpenPopup(false);
    } else {
      const { payload } = await dispatch(UpdateComment(values));
      if (payload?.errorCode) {
        helper.toast("error", payload.messages);
      }
      setOpenPopup(false);
    }
    resetForm();
    setRecordForEdit(null);
    // setRecords(records);
    setOpenPopup(false);

    
  };
  return (
    <div className="rounded-[7px] bg-[white] px-[20px] py-[15px] text-[15px]">
      <div className="">
        <div className="">
          {/* Tiêu đề block đánh giá */}
          <div className="text-[20px] font-semibold">
            <span className="">Đánh giá sản phẩm</span>
          </div>
          {/* Block main bao gồm 2 block đánh giá phụ  */}
          <div className="md:flex max-w-[100%] w-full justify-start gap-[20px] py-[15px]">
            {/* Block 1 đánh giá */}
            <AverageRating />
            {/* Button viết đánh giá */}
            {user ? (
              <div className=" max-w-[100%] md:max-w-[50%] w-full flex items-center justify-center pt-[20px]">
                <div
                  onClick={() => {
                    setRecordForEdit(null);
                    setOpenPopup(true);
                  }}
                  className="md:max-w-[60%] w-full border-[2px] border-solid border-[#C92127] rounded-[10px] px-[30px] py-[10px] items-center justify-center flex font-bold cursor-pointer"
                >
                  <span className="text-[#C92127]  text-[17px]">
                    Viết đánh giá
                  </span>
                </div>
              </div>
            ) : (
              <div className="capitalize flex justify-center items-center">
                Chỉ có thành viên mới có thể viết nhận xét.Vui lòng{" "}
                <Link
                  to="/login"
                  className="text-green-600 hover:text-green-500 mx-[5px]"
                >
                  {" "}
                  đăng nhập{" "}
                </Link>{" "}
                hoặc{" "}
                <Link
                  to="/register"
                  className="text-green-600 hover:text-green-500 ml-[5px]"
                >
                  {" "}
                  đăng ký{" "}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <Comments/>
      </div>
      <Popup
          title={"Viết Đánh Giá Sản Phẩm"}
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
          <CreateComment
            {...{
              recordForEdit,
              addOrEdit,
            }}
          />
        </Popup>
    </div>
    
  );
}

export default CommentList;
