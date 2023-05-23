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
    getVoucher,
    getAllVoucher,
    AddNewVoucher,
    UpdateVoucher,
} from "../../../slice/vouchersSlice";
import { useDispatch, useSelector } from "react-redux";
import FormAddOrEdit from "./AddOrEdit/index";
import helper from "../../../utiliti/helper/helper";
import { getAllUserRoot } from "../../../slice/userSlice";

export default function VoucherList() {
    const dispatch = useDispatch();
    const [openPopup, setOpenPopup] = useState(false);
    const [dataSearch, setDataSearch] = React.useState([]);
    const [rowId, setRowId] = useState(null);
    const [rowsData, setRowsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [optionVoucher, setOptionVoucher] = useState([]);

    const voucher = useSelector((state) => state.voucher.value);
    const handleSearch = (e) => {
        console.log("e.target.value", e.target.value);
    };
    const openInPopup = (item) => {
        setOpenPopup(true);
        setRecordForEdit(item);
    };

    const addOrEdit = async (values, resetForm) => {
        // console.log("phuc", values);
        if (!values._id) {
            try {
                const { payload } = await dispatch(AddNewVoucher(values));
                console.log(payload);
                if (payload?.successCode) {
                    helper.toast("success", "Add success");
                }
                if (payload?.errorCode) {
                    helper.toast("success", "Update false");
                }
            } catch (error) {
                helper.toast("error", "fetching data false");
            }
        } else {
            try {
                const { payload } = await dispatch(UpdateVoucher(values));
                console.log(payload.data);
                if (payload?.successCode) {
                    helper.toast("success", "Update success");
                }
                if (payload?.errorCode) {
                    helper.toast("success", "Update false");
                }
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
        setRowsData(voucher);
    }, [voucher]);

    const columnsData = [
        { field: "_id", headerName: "ID", width: 150 },
        { field: "code", headerName: "Code", width: 200, editable: true },
        {
            field: "discount",
            headerName: "Discount",
            width: 100,
            editable: true,
        },
        {
            field: "createdAt",
            headerName: "Created At",
            width: 300,
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
                        <ActionUpdate
                            params={params}
                            openInPopup={openInPopup}
                        />
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
                <FormAddOrEdit
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit}
                    optionUser={optionVoucher}
                />
            </Popup>
        </>
    );
}