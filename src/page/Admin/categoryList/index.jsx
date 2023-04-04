import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Add, EditOutlined, Close } from "@mui/icons-material";
import { Button, Paper, Toolbar } from "@mui/material";
import Controls from "../../../components/AdminComponent/controls/Controls";
import Popup from "../../../components/AdminComponent/MyPopup/MyPopup";
import NewCategory from "./AddOrEdit";
// Services
import * as employeeService from "../../../services/employeeService";
import InputSearch from "../../../components/AdminComponent/inputSearch/inputSearch.component";
import CustomPaginationActionsTable from "../../../components/AdminComponent/table/table.component";
import ActionSave from "./ActionSave";
import ActionDelete from "./ActionDelete";
import ActionUpdate from "./ActionUpdate";
import { getAllProduct } from "../../../slice/productsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ProductList() {
  const [openPopup, setOpenPopup] = useState(false);
  const [dataSearch, setDataSearch] = React.useState([]);
  const [rowId, setRowId] = useState(null);
  const [rowsData, setRowsData] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleSearch = (e) => {
    console.log("e.target.value", e.target.value);
  };

  const addOrEdit = (employee, resetForm) => {
    if (employee.id == 0) employeeService.insertEmployee(employee);
    else employeeService.updateEmployee(employee);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setRecords(employeeService.getAllEmployees());
  };

  const columnsData = [
    { field: "_id", headerName: "ID", width: 200 },
    { field: "name", headerName: "Name", width: 200, editable: true },
    { field: "image", headerName: "Image", width: 200, editable: true },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="w-full flex justify-between items-center">
            <ActionSave {...{ params, rowId, setRowId }} />
            <ActionUpdate params={params} />
            <ActionDelete params={params} />
          </div>
        );
      },
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await dispatch(getAllProduct());
      setRowsData(data.payload.data);
    })();
  }, []);
  // useEffect(() => {
  //   setRowsData(data)
  // }, [data])

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
              setOpenPopup(true);
            }}
          />
        </Toolbar>

        <div className="mt-[30px]">
          <CustomPaginationActionsTable
            {...{ rowsData, columnsData, rowId, setRowId }}
          />
        </div>
      </Paper>

      <Popup
        title="Add New Product"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <NewCategory addOrEdit={addOrEdit} />

        {/* ném component vào */}
        {/* <NewProduct recordForEdit={recordForEdit} addOrEdit={addOrEdit} /> */}
      </Popup>
    </>
  );
}
