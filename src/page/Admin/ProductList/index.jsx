import React, { useEffect, useState } from "react";
import { Add, EditOutlined, Close, Image } from "@mui/icons-material";
import { Button, Paper, Toolbar } from "@mui/material";
import Controls from "../../../components/AdminComponent/controls/Controls";
import Select from 'react-select'
import Popup from "../../../components/AdminComponent/MyPopup/MyPopup";
// Services
import * as employeeService from "../../../services/employeeService";
import InputSearch from "../../../components/AdminComponent/inputSearch/inputSearch.component";
import CustomPaginationActionsTable from "../../../components/AdminComponent/table/table.component";
import ActionSave from "./ActionSave";
import ActionDelete from "./ActionDelete";
import ActionUpdate from "./ActionUpdate";
import { getAllProduct } from "../../../slice/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import FormAddOrEdit from "./FormAddOrEdit/index";

export default function ProductList() {
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  const [dataSearch, setDataSearch] = React.useState([]);
  const [rowId, setRowId] = useState(null);
  const [rowsData, setRowsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const products = useSelector(state => state.product.value)
  const [recordForEdit, setRecordForEdit] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { payload } = await dispatch(getAllProduct());
        setRowsData(payload.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error)
      }
    })();
  }, []);

  useEffect(() => {
    setRowsData(products)
  }, [products])

  const handleSearch = (e) => {
    console.log("e.target.value", e.target.value);
  };
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const openInPopup = (item) => {
    setOpenPopup(true);
    setRecordForEdit(item);
  };

  const addOrEdit = (values, resetForm) => {
    if (!values._id) {
      // const data = dispatch(AddNewCategory(data));
      // console.log(data.payload.data);
      console.log("add")
      setOpenPopup(false)
    } else {
      console.log("Sửa");
      setOpenPopup(false)

      // // employeeService.updateEmployee(employee);
    }
    resetForm();
    setRecordForEdit(null);
    setRecords(records);
    setOpenPopup(false);
  };
 
  
  const columnsData = [
    { field: "_id", headerName: "ID", width: 150 },
    { field: "name", headerName: "Name", width: 250, editable: true },
    {
      field: "category",
      headerName: "Category",
      width: 200,
      type:"singleSelect",
      valueOptions:options,
      renderCell: (params) => (
        // console.log(params.colDef.valueOptions)
        <Select options={params.colDef.valueOptions} className="z-10"/>
      ),
    },
    {
      field: "image",
      headerName: "Image",
      width: 200,
      editable: true,
      renderCell: (params) => (
        <img src={params.row.productImage[0]} className="w-full" alt="" />
      ),
    },
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
              setRecordForEdit(null)
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
        title="Books"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <FormAddOrEdit recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>
    </>
  );
}
