import React, { useEffect, useState } from "react";
import { Add, EditOutlined, Close } from "@mui/icons-material";
import { Button, Paper, Toolbar } from "@mui/material";
import Controls from "../../../components/AdminComponent/controls/Controls";
import Popup from "../../../components/AdminComponent/MyPopup/MyPopup";
import NewProduct from "../newEmployees";
// Services
import * as employeeService from "../../../services/employeeService";
import InputSearch from "../../../components/AdminComponent/inputSearch/inputSearch.component";
import CustomPaginationActionsTable from "../../../components/AdminComponent/table/table.component";
import ActionSave from "./ActionSave";
import ActionDelete from "./ActionDelete";
import ActionUpdate from "./ActionUpdate";
import { fetchs } from "../../../slice/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import NewPublishing from "../newPulishing/NewPublishing";
import NewCategory from "../newCategory";

export default function CategoryList() {
  const [openPopup, setOpenPopup] = useState(false);
  const [dataSearch, setDataSearch] = React.useState([]);
  const [rowId, setRowId] = useState(null);
  const [rowsData, setRowsData] = useState([]);

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
    { field: "icon", headerName: "Icon", width: 200, editable: true },
    { field: "banner", headerName: "Banner", width: 200, editable: true },
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
      const data = await dispatch(fetchs());
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
            {...{ rowsData, columnsData, rowId, setRowId, dataSearch }}
          />
        </div>
      </Paper>

      <Popup
        title="Category Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <NewCategory addOrEdit={addOrEdit} />
      </Popup>
    </>
  );
}
