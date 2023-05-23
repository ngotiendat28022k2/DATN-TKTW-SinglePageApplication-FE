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
    getInfomationPage,
    AddNewInfomationPage,
    UpdateInformation,
    getAllInformationPage,
    searchInfor,
} from "../../../slice/infomationPage";
import { useDispatch, useSelector } from "react-redux";
import FormAddOrEdit from "./FormAddOrEdit/index";
import helper from "../../../utiliti/helper/helper";
import { getAllCategoryInfor } from "../../../slice/categoryInformation";

export default function ProductList() {
    const dispatch = useDispatch();
    const [openPopup, setOpenPopup] = useState(false);
    const [dataSearch, setDataSearch] = React.useState([]);
    const [rowId, setRowId] = useState(null);
    const [rowsData, setRowsData] = useState([]);
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [optionCategory, setOptionCategory] = useState([]);
    const [objSearch, setObjSearch] = useState({
        search: "",
    });

    const informationSlide = useSelector((state) => state.infomationPage.value);

    const handleSearch = async (e) => {
        console.log("e.target.value", e.target.value);
        setObjSearch((prev) => ({ ...prev, search: e.target.value }));
        if (objSearch.search === "") {
            setDataSearch([]);
        } else {
            try {
                const { payload } = await dispatch(searchInfor(objSearch));
                console.log("payload", payload.data);
                setDataSearch(payload.data.data);
            } catch (error) {
                console.log("error search information", error);
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
            try {
                const { payload } = await dispatch(
                    AddNewInfomationPage(values)
                );
                console.log("payload", payload);
                if (payload?.successCode) {
                    helper.toast("success", "Add Infomation Page success");
                }
                if (payload?.errorCode) {
                    helper.toast("error", "Add Infomation Page false");
                }
            } catch (error) {
                helper.toast("error", "fetching data false");
            }
            // setOpenPopup(false);
        } else {
            try {
                const { payload } = await dispatch(UpdateInformation(values));
                if (payload?.successCode) {
                    helper.toast("success", "Update information page success");
                }
                if (payload?.errorCode) {
                    helper.toast("error", "Update information page false");
                }
                // setOpenPopup(false);
            } catch (error) {
                helper.toast("error", "Edit data false");
            }
        }
        resetForm();
        setRecordForEdit(null);
        // setRecords(records);
        setOpenPopup(false);
    };

    const columnsData = [
        { field: "_id", headerName: "ID", width: 250 },
        { field: "title", headerName: "Title", width: 500, editable: true },
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

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const data = await dispatch(getAllInformationPage());
                console.log("data", data.payload.data);
                if (data.payload?.successCode) {
                    setRowsData(data.payload.data);
                }
                if (data.payload?.errorCode) {
                    helper.toast("error", payload.message);
                }
                setIsLoading(false);
            } catch (error) {
                helper.toast("error");
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const categoryInfor = await dispatch(getAllCategoryInfor());
                console.log("categoryInfor", categoryInfor.payload.data);
                setOptionCategory(
                    categoryInfor.payload.data.map((a) => ({
                        ...a,
                        label: a.name,
                        value: a.name,
                    }))
                );
            } catch (error) {
                console.log(error);
            }
        })();
    }, [informationSlide]);
    useEffect(() => {
        setRowsData(informationSlide);
        setDataSearch(informationSlide);
    }, [informationSlide]);
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
                title={
                    recordForEdit
                        ? "Edit Information Page"
                        : "Add Information Page"
                }
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <FormAddOrEdit
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit}
                    optioncategoryInfor={optionCategory}
                />
            </Popup>
        </>
    );
}
