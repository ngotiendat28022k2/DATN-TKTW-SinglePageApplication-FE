import React, { useEffect, useState } from "react";
import { Add, EditOutlined, Close } from "@mui/icons-material";
import {
  Button,
  Paper,
  Toolbar,
} from "@mui/material";
import Controls from "../../../components/AdminComponent/controls/Controls";
import Popup from "../../../components/AdminComponent/MyPopup/MyPopup";
// Services
import InputSearch from "../../../components/AdminComponent/inputSearch/inputSearch.component";
import CustomPaginationActionsTable from "../../../components/AdminComponent/table/table.component";
import ActionSave from "./ActionSave";
import ActionDelete from "./ActionDelete";
import ActionUpdate from "./ActionUpdate";
import { AddNewProduct, UpdateProduct, getAllProduct } from "../../../slice/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import FormAddOrEdit from "./FormAddOrEdit/index";
import helper from "../../../utiliti/helper/helper";
import UploadImage from "../../../components/AdminComponent/uploadImg/upload";


export default function ProductList() {
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  const [dataSearch, setDataSearch] = React.useState([])
  const [rowId, setRowId] = useState(null)
  const [rowsData, setRowsData] = useState([])
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  
  const productSlide = useSelector((state) => state.product.value)
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

  const addOrEdit = async (values, resetForm) => {
    if (!values._id) {
      const {payload} =await dispatch(AddNewProduct(values));
      if(payload.data?.successCode){
        helper.toast("success", "Add product success")
      }
      if(payload.data?.errorCode){
        helper.toast("success", payload.data.messages)
      }
      setOpenPopup(false)
    } else {
      const {payload} =await dispatch(UpdateProduct(values));
      if(payload.data?.successCode){
        helper.toast("success", "Update product success")
      }
      if(payload.data?.errorCode){
        helper.toast("success", payload.data.messages)
      }
      setOpenPopup(false)
    }
    resetForm();
    setRecordForEdit(null);
    setRecords(records);
    setOpenPopup(false);

  };
  
  const columnsData = [
    { field: '_id', headerName: 'ID', width: 200, },
    { field: 'name', headerName: 'Name', width: 200, editable: true },
    { field: 'image', headerName: 'Image', width: 200, editable: true },
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

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
        const data = await dispatch(getAllProduct())
        setRowsData(data.payload.data)
        setIsLoading(false)
      } catch (error) {
        helper.toast("error")
      }
    })()
  }, [])
  useEffect(() => {
    setRowsData(productSlide)
  }, [productSlide])
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
          <CustomPaginationActionsTable {...{ rowsData, columnsData, rowId, setRowId, isLoading }} />
        </div>
      </Paper>
      <Popup
        title={recordForEdit ? "Edit book" : "Add book"}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >

        <FormAddOrEdit recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>
    </>
  );
}
