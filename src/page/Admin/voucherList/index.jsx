import React, { useEffect, useState } from "react";
import { Add, EditOutlined, Close, Image } from "@mui/icons-material";
import { Button, Paper, Toolbar } from "@mui/material";
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
  AddNewVoucher,
  getAllVoucher,
  UpdateVoucher,
} from "../../../slice/voucherSlice";
import { useDispatch, useSelector } from "react-redux";
import FormAddOrEdit from "./AddOrEdit/index";
import helper from "../../../utiliti/helper/helper";

export default function VoucherList() {
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  const [dataSearch, setDataSearch] = React.useState([]);
  const [rowId, setRowId] = useState(null);
  const [rowsData, setRowsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const voucher = useSelector((state) => state.voucher.value);
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
          const { payload } = await dispatch(AddNewVoucher(values));
          console.log(payload);
          if (payload?.successCode) {
            helper.toast("success", "Add success");
          }
          if (payload?.errorCode) {
            helper.toast("error", "Add false");
          }
        })();
      } catch (error) {
        helper.toast("error", "fetching data false");
      }
    } else {
      try {
        (async () => {
          const { payload } = await dispatch(UpdateVoucher(values));
          console.log(payload.data);
          if (payload?.successCode) {
            helper.toast("success", "Update success");
          }
          if (payload?.errorCode) {
            helper.toast("error", "Update false");
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
        const { payload } = await dispatch(getAllVoucher());
        console.log("payload", payload);
        if (payload?.successCode) {
          setRowsData(payload.data);
        }
        if (payload?.errorCode) {
          helper.toast("error", payload.message);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        // Xử lý lỗi ở đây, ví dụ:
        helper.toast("error", "Failed to fetch data");
        setIsLoading(false);
      }

    })();
  }, []);
  useEffect(() => {
    setRowsData(voucher);
  }, [voucher]);

  const columnsData = [
    { field: "_id", headerName: "ID", width: 230 },
    { field: "code", headerName: "Code", width: 250, editable: true },
    { field: "discount", headerName: "Discount", width: 150, editable: true },
    { field: "createdAt", headerName: "Created At", width: 250, editable: true },
    { field: "expirationDate", headerName: "Expiration Date", width: 250, editable: true },
    { field: "usageLimit", headerName: "Usage Limit", width: 120, editable: true },
    { field: "usedCount", headerName: "Used Count", width: 120, editable: true },
    { field: "description", headerName: "Description", width: 300, editable: true },
    { field: "nameCreated", headerName: "Name Created", width: 250, editable: true },
    { field: "isActive", headerName: "Active", width: 100, editable: true },
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
            {...{
              rowsData,
              columnsData,
              rowId,
              setRowId,
              isLoading,
            }}
          />
        </div>
      </Paper>

      <Popup
        title={recordForEdit ? "Edit Voucher" : "Add Voucher"}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <FormAddOrEdit recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>
    </>
  );
}
