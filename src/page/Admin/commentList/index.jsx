import React, { useEffect, useState } from "react";
import { Add, EditOutlined, Close, Image } from "@mui/icons-material";
import { Avatar, Button, Paper, Toolbar } from "@mui/material";
import Controls from "../../../components/AdminComponent/controls/Controls";
import Select from "react-select";
import Popup from "../../../components/AdminComponent/MyPopup/MyPopup";
// Services
import InputSearch from "../../../components/AdminComponent/inputSearch/inputSearch.component";
import CustomPaginationActionsTable from "../../../components/AdminComponent/table/table.component";
import ActionSave from "./ActionSave";
import ActionDelete from "./ActionDelete";
import ActionUpdate from "./ActionUpdate";
import { useDispatch, useSelector } from "react-redux";
import FormAddOrEdit from "./AddOrEdit/index";
import helper from "../../../utiliti/helper/helper";
import { AddNewComment, UpdateComment, getAllComment, getAllProductsWithComments } from "../../../slice/commentSlice";
import { Link } from "react-router-dom";

export default function CommentList() {
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  const [dataSearch, setDataSearch] = React.useState([]);
  const [rowId, setRowId] = useState(null);
  const [rowsData, setRowsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const commentStore = useSelector((state) => state.comment.value);
  const [recordForEdit, setRecordForEdit] = useState(null);

  const handleSearch = (e) => {
    console.log("e.target.value", e.target.value);
  };
  const openInPopup = (item) => {
    setOpenPopup(true);
    setRecordForEdit(item);
  };

  const addOrEdit = (values, resetForm) => {
    if (!values._id) {
      try {
        (async () => {
          const { payload } = await dispatch(AddNewComment(values));
          console.log("payload", payload)
          if (payload?.successCode) {
            helper.toast("success", "Add success");
          }
          if (payload?.errorCode) {
            helper.toast("error", payload.message);
          }
        })();
      } catch (error) {
        helper.toast("error", "fetching data false");
      }
    } else {
      try {
        (async () => {
          const { payload } = await dispatch(UpdateComment(values));
          console.log(payload.data);
          if (payload?.successCode) {
            helper.toast("success", "Update success");
          }
          if (payload?.errorCode) {
            helper.toast("error", payload.message);
          }
        })();
      } catch (error) {
        helper.toast("error", "Edit data false");
      }
    }
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { payload } = await dispatch(getAllProductsWithComments());
        const products = [];
        for (const comment of payload.data) {
          if (comment.product && !products.find(product => product._id == comment.product._id)) {
            products.push({ ...comment.product, id: comment.product._id }); // Add the id property to each row
          }
        }
        console.log('products', products);
        if (payload?.successCode) {
          setRowsData(products);
        }
        if (payload?.errorCode) {
          helper.toast("error", payload.message);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  
  useEffect(() => {
    setRowsData(commentStore);
  }, [commentStore]);

  const columnsData = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "product",
      headerName: "Sản phẩm",
      width: 100,
      renderCell: (params) => <Avatar sx={{ width: 56, height: 56 }} src={params.row.productImage}/>
    },
    {
      field: "actions",
      headerName: "Hành động",
      type: "actions",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="w-full flex justify-between items-center">
             <Link to={`/admin/comment/${params.row._id}`}>Xem thêm</Link>
          </div>
        );
      },
    },
  ];

  //   return () => {
  //   };
  return (
    <>
      <Paper
        sx={{
          margin: 5,
          padding: "20px",
          flex: 4,
        }}
      >
        <Toolbar>
          <InputSearch handleSearch={handleSearch} />
          <Controls.Button
            text="Add New"
            variant="outlined"
            startIcon={<Add />}
            sx={{ position: "absolute", right: "10px" }}
            onClick={() => {
              setRecordForEdit(null);
              setOpenPopup(true);
            }}
          />
        </Toolbar>

        <div className="mt-[30px]">
          <CustomPaginationActionsTable
            {...{ rowsData, columnsData, rowId, setRowId, isLoading }}
          />
        </div>
      </Paper>

      <Popup
        title={recordForEdit ? "Edit Comment" : "Add Comment"}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <FormAddOrEdit recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>
    </>
  );
}
