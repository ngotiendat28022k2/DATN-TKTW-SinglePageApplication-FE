import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import local from "../../../../utiliti/local/localSesion";
import { isCommentReport, reportComment } from "../../../../slice/commentSlice";
import helper from "../../../../utiliti/helper/helper";
import { useParams } from "react-router-dom";

const ActionReport = ({ params }) => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const [isReport, setIsReport] = useState(false)
  const [user, setUser] = useState(local.get("user"))
  useEffect(() => {
    (async() => {
      const data = {
        commentId:params._id,
        reporterId:user._id
      }
      const {payload} = await dispatch(isCommentReport(data))
      setIsReport(payload.success)
    })()
  }, [params])


  const handleReportComment =async () => {
      try {
        const data={
          commentId:params._id,
          reporterId:user._id,
          product:id
        }      
       const {payload} =  await dispatch(reportComment(data))
        console.log("paylaod", payload)
        if(payload.success){
          helper.toast("success", payload.message)
          const result = await dispatch(isCommentReport(data))
          setIsReport(result.payload.success)
        }
      } catch (error) {
        console.log("error", error)
      }
  }
  return (
    <>
      {isReport ? <Button color="error" disabled sx={{ textTransform: "capitalize" }}>
        <i className="fa-solid fa-triangle-exclamation mr-[5px]"></i> Reported
      </Button> : <Button color="error" sx={{ textTransform: "capitalize" }} onClick={handleReportComment}>
        <i className="fa-solid fa-triangle-exclamation mr-[5px]"></i> Report
      </Button>}

      
    </>
  );
};

export default ActionReport;
