import React, { useEffect, useState } from "react";
import { Add, EditOutlined, Close } from "@mui/icons-material";
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
  AddNewProduct,
  UpdateProduct,
  getAllProduct,
  searchProduct,
} from "../../../slice/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import FormAddOrEdit from "./FormAddOrEdit/index";
import helper from "../../../utiliti/helper/helper";
import UploadImage from "../../../components/AdminComponent/uploadImg/upload";
import { getAllCategory } from "../../../slice/categorySlice";
import { getAllPublish } from "../../../slice/publishSlice";
import { getAllSupplier } from "../../../slice/supplieresSlice";
import { getAllFormBook } from "../../../slice/formBookSlice";
import { getAllAuthor } from "../../../slice/authorSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  const [dataSearch, setDataSearch] = React.useState([]);
  const [rowId, setRowId] = useState(null);
  const [rowsData, setRowsData] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [optionCategory, setOptionCategory] = useState([]);
  const [optionPublish, setOptionpPublish] = useState([]);
  const [optionSupplier, setOptionSupplier] = useState([]);
  const [optionFormBook, setOptionFormBook] = useState([]);
  const [optionAuthor, setOptionAuthor] = useState([]);
  const [objSearch, setObjSearch] = useState({
    search: "",
    price: "0",
    authors: "",
    formbooks: "",
    supplieres: "",
  });

  const productSlide = useSelector((state) => state.product.value);
  const productSeachSlide = useSelector((state) => state.product.search);
  const publishingSlide = useSelector((state) => state.publish.value);
  const suppliereSlide = useSelector((state) => state.supplier.value);
  const formbookSlide = useSelector((state) => state.formBook.value);
  const authorSlide = useSelector((state) => state.author.value);

  const handleSearch = async (e) => {
    console.log("e.target.value", e.target.value);
    setObjSearch((prev) => ({ ...prev, search: e.target.value }));
    if (objSearch.search === "") {
      setDataSearch([]);
    } else {
      try {
        const { payload } = await dispatch(searchProduct(objSearch));
        console.log("payload", payload.data);
        setDataSearch(payload.data.data);
      } catch (error) {
        console.log("error search product", error);
      }
    }
  };

  const openInPopup = (item) => {
    setOpenPopup(true);
    setRecordForEdit(item);
  };

  const addOrEdit = async (values, resetForm) => {
    console.log("values", values);
    if (!values._id) {
      const { payload } = await dispatch(AddNewProduct(values));
      console.log("payload", payload)
      if (payload?.successCode) {
        helper.toast("success", "Add product success");
      }
      if (payload?.errorCode) {
        helper.toast("success", payload.messages);
      }
      setOpenPopup(false);
    } else {
      const { payload } = await dispatch(UpdateProduct(values));
      if (payload?.successCode) {
        helper.toast("success", "Update product success");
      }
      if (payload?.errorCode) {
        helper.toast("success", payload.messages);
      }
      setOpenPopup(false);
    }
    resetForm();
    setRecordForEdit(null);
    // setRecords(records);
    setOpenPopup(false);
  };

  const columnsData = [
    { field: "_id", headerName: "ID", width: 200 },
    { field: "name", headerName: "Name", width: 200, editable: true },
    {
      field: "image",
      headerName: "Image",
      width: 200,
      editable: true,
      
      
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

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await dispatch(getAllProduct());
        setRowsData(data.payload.data);
        setIsLoading(false);
      } catch (error) {
        helper.toast("error");
      }
    })();
  }, []);

  useEffect(() => {
    setRowsData(productSlide);
  }, [productSlide]);
  useEffect(() => {
    setDataSearch(productSeachSlide);
  }, [productSeachSlide]);

  useEffect(() => {
    (async () => {
      try {
        const category = await dispatch(getAllCategory());
        setOptionCategory(
          category.payload.data.map((a) => ({
            ...a,
            label: a.name,
            value: a.name,
          }))
        );
        const publish = await dispatch(getAllPublish());
        setOptionpPublish(
          publish.payload.data.map((a) => ({
            ...a,
            label: a.name,
            value: a.name,
          }))
        );
        const supplier = await dispatch(getAllSupplier());
        setOptionSupplier(
          supplier.payload.data.map((a) => ({
            ...a,
            label: a.name,
            value: a.name,
          }))
        );
        const formBook = await dispatch(getAllFormBook());
        setOptionFormBook(
          formBook.payload.data.map((a) => ({
            ...a,
            label: a.name,
            value: a.name,
          }))
        );
        const author = await dispatch(getAllAuthor());
        setOptionAuthor(
          author.payload.data.map((a) => ({
            ...a,
            label: a.name,
            value: a.name,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, [productSlide]);
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
          {dataSearch.length > 0 ? (
            <CustomPaginationActionsTable
              {...{
                rowsData: dataSearch,
                columnsData,
                rowId,
                setRowId,
                isLoading,
              }}
            />
          ) : (
            <CustomPaginationActionsTable
              {...{ rowsData, columnsData, rowId, setRowId, isLoading }}
            />
          )}
        </div>
      </Paper>
      <Popup
        title={recordForEdit ? "Edit Product" : "Add Product"}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <FormAddOrEdit
          {...{
            recordForEdit,
            addOrEdit,
            optionCategory,
            optionSupplier,
            optionPublish,
            optionFormBook,
            optionAuthor,
          }}
        />
      </Popup>
    </>
  );
}
