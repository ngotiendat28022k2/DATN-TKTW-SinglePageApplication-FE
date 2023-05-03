import React, { useEffect, useState } from "react";
import { Add, EditOutlined, Close, Image } from "@mui/icons-material";
import { Button, Paper, Toolbar } from "@mui/material";
import Controls from "../../../components/AdminComponent/controls/Controls";
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
import { getAllUserRoot } from "../../../slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import FormAddOrEdit from "./AddOrEdit/index";
import helper from "../../../utiliti/helper/helper";
import Select from 'react-select';

export default function UserRootList() {
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  const [dataSearch, setDataSearch] = React.useState([]);
  const [rowId, setRowId] = useState(null);
  const [rowsData, setRowsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const supplieres = useSelector((state) => state.supplier.value);
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
          const { payload } = await dispatch(AddNewSupplier(values));
          if (payload?.successCode) {
            helper.toast("success", "Update success");
          }
          if (payload?.errorCode) {
            helper.toast("success", payload.message);
          }
        })();
      } catch (error) {
        helper.toast("error", "fetching data false");
      }
    } else {
      try {
        (async () => {
          const { payload } = await dispatch(UpdateSupplier(values));
          console.log(payload.data);
          if (payload?.successCode) {
            helper.toast("success", "Update success");
          }
          if (payload?.errorCode) {
            helper.toast("success", payload.message);
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
        const { payload } = await dispatch(getAllUserRoot());
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
    setRowsData(supplieres);
  }, [supplieres]);
  
  const optionsRenderer = () => {
    const colourOptions = ["red", "blue"]
      return <Select
            className="basic-single"
            isDisabled={isDisabled}
            options={colourOptions}
      />
  }

  const columnsData = [
    { field: "_id", headerName: "ID", width: 100 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 150,
      renderCell: (params) => (
        <img className="w-full max-w-[150px]" src={params.row.avatar} />
      ),
    },
    { field: "name", headerName: "Name", width: 200, editable: true },
    {
      field: "role",
      headerName: "Role",
      width: 200,
      editable: true,
      type:"singleSelect",
      valueOptions:[0,1,2],
      renderCell: (params) => <p>{helper.userRole(params.row.role)}</p>,
    },
    { field: "email", headerName: "Email", width: 200, editable: true },
    { field: "phone", headerName: "Phone", width: 150, editable: true },
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
