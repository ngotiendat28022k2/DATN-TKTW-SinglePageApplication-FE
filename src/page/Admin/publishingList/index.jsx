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
    AddNewPublish,
    getAllPublish,
    searchPublish,
    UpdatePublish,
} from "../../../slice/publishSlice";
import { useDispatch, useSelector } from "react-redux";
import FormAddOrEdit from "./AddOrEdit/index";
import helper from "../../../utiliti/helper/helper";

export default function PublishList() {
    const dispatch = useDispatch();
    const [openPopup, setOpenPopup] = useState(false);
    const [dataSearch, setDataSearch] = React.useState([]);
    const [rowId, setRowId] = useState(null);
    const [rowsData, setRowsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const publishs = useSelector((state) => state.publish.value);
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [objSearch, setObjSearch] = useState({
        search: "",
    });

    const handleSearch = async (e) => {
        console.log("e.target.value", e.target.value);
        setObjSearch((prev) => ({ ...prev, search: e.target.value }));
        if (objSearch.search === "") {
            setDataSearch([]);
        } else {
            try {
                const { payload } = await dispatch(searchPublish(objSearch));
                console.log("payload", payload.data);
                setDataSearch(payload.data.data);
            } catch (error) {
                console.log("error search publishing", error);
            }
        }
    };
    const openInPopup = (item) => {
        setOpenPopup(true);
        setRecordForEdit(item);
    };

    const addOrEdit = (values, resetForm) => {
        if (!values._id) {
            try {
                (async () => {
                    const { payload } = await dispatch(AddNewPublish(values));
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
                    const { payload } = await dispatch(UpdatePublish(values));
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
                const { payload } = await dispatch(getAllPublish());
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
            }
        })();
    }, []);
    useEffect(() => {
        setRowsData(publishs);
        setDataSearch(publishs);
    }, [publishs]);

    const columnsData = [
        { field: "_id", headerName: "ID", width: 50 },
        { field: "name", headerName: "Name", width: 200, editable: true },
        { field: "phone", headerName: "Phone", width: 150, editable: true },
        { field: "email", headerName: "Email", width: 200, editable: true },
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
                            {...{
                                rowsData,
                                columnsData,
                                rowId,
                                setRowId,
                                isLoading,
                            }}
                        />
                    )}
                </div>
            </Paper>

            <Popup
                title={recordForEdit ? "Edit Publishing" : "Add Publishing"}
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <FormAddOrEdit
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit}
                />
            </Popup>
        </>
    );
}
