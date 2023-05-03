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

export default function UserList() {
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

  const addOrEdit = (values, resetForm) => {
    if (!values._id) {
      try {
        (async () => {
          const { payload } = await dispatch(AddUser(values));
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
          const { payload } = await dispatch(UpdateUser(values));
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
        const { payload } = await dispatch(getAllUserClient());
        console.log(payload);
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
    { field: "_id", headerName: "ID", width: 100 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => <Avatar sx={{ width: 56, height: 56 }} src={params.row.avatar}/>
    },
    { field: "name", headerName: "Name", width: 120, editable: true },
    { field: "isActive", headerName: "Active", width: 100, editable: true, type:"boolean" },
    { field: "email", headerName: "Email", width: 150, editable: true },
    { field: "phone", headerName: "Phone", width: 150, editable: true },
    { field: "address", headerName: "Address", width: 150, editable: true },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="w-full flex justify-between items-center">
            <ActionSave {...{ params, rowId, setRowId }} />
            <ActionUpdate params={params} openInPopup={openInPopup} />
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
          <CustomPaginationActionsTable
            {...{ rowsData, columnsData, rowId, setRowId, isLoading }}
          />
        </div>
      </Paper>

      <Popup
        title={recordForEdit ? "Edit User" : "Add User"}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <FormAddOrEdit recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>
    </>
  );
}
