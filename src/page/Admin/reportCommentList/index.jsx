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
import {
  AddNewSupplier,
  getAllSupplier,
  UpdateSupplier,
} from "../../../slice/supplieresSlice";
import {
  AddUser,
  getAllUserClient,
  UpdateUser,
} from "../../../slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import FormAddOrEdit from "./AddOrEdit/index";
import helper from "../../../utiliti/helper/helper";
import { getAllProductsWithComments, getAllProductsWithReports } from "../../../slice/commentSlice";
import CustomPaginationActionsTableReport from "../../../components/AdminComponent/table/tablereport.component";

export default function ReportList() {
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  const [dataSearch, setDataSearch] = React.useState([]);
  const [rowId, setRowId] = useState(null);
  const [rowsData, setRowsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const userStore = useSelector((state) => state.user.value);
  const [recordForEdit, setRecordForEdit] = useState(null);

  const handleSearch = (e) => {
    console.log("e.target.value", e.target.value);
  };
  const openInPopup = (item) => {
    setOpenPopup(true);
    setRecordForEdit(item);
  };

  // ...

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { payload } = await dispatch(getAllProductsWithReports());
       console.log('payload', payload.data);
        if (payload?.successCode) {
          setRowsData(payload.data);
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
    setRowsData(userStore);
  }, [userStore]);

  const columnsData = [
    {
      field: "productImage",
      headerName: "Ảnh sản phẩm",
      width: 120,
      renderCell: (params) => <Avatar sx={{ width: 56, height: 56 }} src={params.row._doc?.product?.productImage} />
    },
    {
      field: "name",
      headerName: "Tên sản phẩm",
      width: 250,
      renderCell: (params) => <span>{params.row._doc?.product?.name}</span>,
    },
    {
      field: "rating",
      headerName: "Rating",
      width: 100,
      renderCell: (params) => <span>{params.row._doc?.rating}</span>,
    },
    {
      field: "content",
      headerName: "Nội dung",
      width: 300,
      editable: true,
      renderCell: (params) => (
        <span dangerouslySetInnerHTML={{ __html: params.row._doc?.content }}></span>
      ),
    },
    {
      field: "email",
      headerName: "Người bình luận",
      width: 200,
      editable: true,
      renderCell: (params) => <span>{params.row._doc?.user?.email}</span>,
    },
    {
      field: "time",
      headerName: "Thời gian",
      width: 200,
      editable: true,
      renderCell: (params) => <span>{params.row._doc?.createdAt}</span>,
    },
    {
      field: "actions",
      headerName: "Hành động",
      type: "actions",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="w-full flex justify-between items-center">
            <ActionDelete params={params} />
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
          <CustomPaginationActionsTableReport
            {...{ rowsData, columnsData, rowId, setRowId, isLoading }}
          />
        </div>
      </Paper>

      <Popup
        title={recordForEdit ? "Edit User" : "Add User"}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >

      </Popup>
    </>
  );
}
