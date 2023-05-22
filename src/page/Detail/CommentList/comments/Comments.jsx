import { Avatar, Button, Rating } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WSPGallery from "../../CarouselImage/WSPGallery";
import local from "../../../../utiliti/local/localSesion";
import { RemoveComment, getAllComment } from "../../../../slice/commentSlice";
import helper from "../../../../utiliti/helper/helper";
import ActionDelete from "./ActionDelete";
import ActionReport from "./ActionReport";
const Comments = () => {
  const [user, setUser] = useState(local.get("user"));
  const commentStore = useSelector((state) => state.comment.value);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedDay = day.toString().padStart(2, "0");
    const formattedMonth = month.toString().padStart(2, "0");
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedDate = `${formattedHours}:${formattedMinutes} ${formattedDay}/${formattedMonth}/${year}`;

    return formattedDate;
  };
  const dispatch = useDispatch();

  return (
    <div>
      {commentStore &&
        commentStore.map((comment) => (
          <div
            className="mt-[20px] border-t-[1px] border-stone-400"
            key={comment._id}
          >
            <div className="mt-[20px] mx-[30px] flex justify-start items-start">
              <div className="mr-[40px] w-[4%]">
                <Avatar alt="Remy Sharp" src={comment.user.avatar} />
              </div>
              <div className="w-[95%]">
                <div className="ml-[5px]">
                  <span className="text-[16px] text-[#333]">
                    {comment.user.email}
                  </span>
                  <br />
                  <span className="text-[10px] text-[#5a5a5a]">
                    {formatDate(comment.createdAt)}
                  </span>
                </div>
                <div className="mt-[5px] mb-[10px]">
                  <Rating
                    name="simple-controlled"
                    readOnly
                    value={comment.rating}
                  />
                </div>
                <div className="ml-[5px]">
                  {comment.images && (
                    <div className="mb-[10px]">
                      <WSPGallery galleryImages={comment.images} />
                    </div>
                  )}
                  <div
                    className="capitalize text-[16px] mb-[15px]"
                    dangerouslySetInnerHTML={{ __html: comment.content }}
                  ></div>
                  {user && (
                    <div className="flex justify-between items-center max-w-[200px] w-full">
                      {comment.user._id === user._id ? (
                        <ActionDelete params={comment} />
                      ) : (
                        <ActionReport params={comment} />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Comments;
