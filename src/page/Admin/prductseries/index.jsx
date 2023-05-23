import React, { useEffect, useState } from "react";
import { Add, EditOutlined, Close, Image } from "@mui/icons-material";
import { Button, Paper, Toolbar } from "@mui/material";
import Controls from "../../../components/AdminComponent/controls/Controls";
import Popup from "../../../components/AdminComponent/MyPopup/MyPopup";
// Services
import InputSearch from "../../../components/AdminComponent/inputSearch/inputSearch.component";
import CustomPaginationActionsTable from "../../../components/AdminComponent/table/table.component";
import ActionSave from "../prductseries/ActionSave";
import ActionDelete from "../prductseries/ActionDelete";
import ActionUpdate from "../prductseries/ActionUpdate";

import { useDispatch, useSelector } from "react-redux";
import FormAddOrEdit from "./AddOrEdit/index";
import helper from "../../../utiliti/helper/helper";
import {
    AddNewProductSeries,
    UpdateProductSeries,
    getAllProductSeries,
    searchPro,
} from "../../../slice/productseries";
import { getAllCategory } from "../../../slice/categorySlice";

export default function ProductSeries() {
    const dispatch = useDispatch();
    const [openPopup, setOpenPopup] = useState(false);
    const [dataSearch, setDataSearch] = React.useState([]);
    const [rowId, setRowId] = useState(null);
    const [rowsData, setRowsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [optionCategory, setoptionCategory] = useState([]);
    const [objSearch, setObjSearch] = useState({
        search: "",
    });

    const productSlice = useSelector((state) => state.productSeries.value);
    const handleSearch = async (e) => {
        console.log("e.target.value", e.target.value);
        setObjSearch((prev) => ({ ...prev, search: e.target.value }));
        if (objSearch.search === "") {
            setDataSearch([]);
        } else {
            try {
                const { payload } = await dispatch(searchPro(objSearch));
                console.log("payload", payload.data);
                setDataSearch(payload.data.data);
            } catch (error) {
                console.log("error search product series", error);
            }
        }
    };
    const openInPopup = (item) => {
        setOpenPopup(true);
        console.log("item", item);
        setRecordForEdit(item);
    };

    const addOrEdit = async (values, resetForm) => {
        // console.log("phuc", values);
        if (!values._id) {
            try {
                const { payload } = await dispatch(AddNewProductSeries(values));
                if (payload?.successCode) {
                    helper.toast("success", "Add success");
                }
                if (payload?.errorCode) {
                    helper.toast("error", "Add false");
                }
            } catch (error) {
                helper.toast("error", "fetching data false");
            }
        } else {
            try {
                const { payload } = await dispatch(UpdateProductSeries(values));
                console.log("payload update", payload);
                if (payload?.successCode) {
                    helper.toast("success", "Update success");
                }
                if (payload?.errorCode) {
                    helper.toast("error", "Update false");
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
                const { payload } = await dispatch(getAllProductSeries());
                // console.log(payload);
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
        (async () => {
            try {
                const categories = await dispatch(getAllCategory());
                setoptionCategory(
                    categories.payload.data.map((a) => ({
                        ...a,
                        label: a.name,
                        value: a.name,
                    }))
                );
            } catch (error) {
                console.log(error);
            }
        })();
    }, [productSlice]);

    useEffect(() => {
        // console.log("productSeries", productSeries);
        setRowsData(productSlice);
        setDataSearch(productSlice);
    }, [productSlice]);

    const columnsData = [
        { field: "_id", headerName: "ID", width: 150 },
        { field: "name", headerName: "Name", width: 350, editable: true },
        {
            field: "image",
            headerName: "Image",
            width: 280,
            renderCell: (params) =>
                params.row.image.map((image) => <img src={image} />),
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

    // console.log("optionCategory", optionCategory);
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
                    recordForEdit ? "Edit Product Series" : "Add Product Series"
                }
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <FormAddOrEdit
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit}
                    optionCategories={optionCategory}
                />
            </Popup>
        </>
    );
}
