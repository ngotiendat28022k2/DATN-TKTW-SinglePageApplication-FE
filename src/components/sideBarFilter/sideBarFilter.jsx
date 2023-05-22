import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchProduct } from "../../../slice/productsSlice";
import { getAllFormBook } from "../../../slice/formBookSlice";
import helper from "../../../utiliti/helper/helper";
import { getAllSupplier } from "../../../slice/supplieresSlice";
import { getAllAuthor } from "../../../slice/authorSlice";

export default function SideBarFilter({
    setDataSearch,
    setObjSearch,
    objSearch,
    valueInput,
}) {
    const dispatch = useDispatch();

    const [prices, setPrices] = useState([
        { name: "Dưới 150,000đ", value: "0,150000" },
        { name: "Từ 150,000đ - 300,000đ", value: "150000,300000" },
        { name: "Từ 300,000đ - 500,000đ", value: "300000,500000" },
        { name: "Từ 500,000đ - 700,000đ", value: "500000,700000" },
        { name: "Trên 700,000đ", value: "700000" },
    ]);
    const [authors, setAuthors] = useState([]);
    const [formBooks, setFormBooks] = useState([]);
    const [suppliers, setSuppliers] = useState([]);

    const [selectedPrices, setSelectedPrices] = useState("None");
    const [selectedAuthor, setSelectedAuthor] = useState("All");
    const [selectedFormBook, setSelectedFormBook] = useState("All");
    const [selectedSuppliers, setSelectedSuppliers] = useState("All");

    //init Data
    useEffect(() => {
        (async () => {
            try {
                const dataAuthor = await dispatch(getAllAuthor());

                if (dataAuthor?.payload?.data) {
                    setAuthors(dataAuthor?.payload.data);
                    console.log("authors", dataAuthor.payload.data);
                }
                if (dataAuthor?.payload?.errorCode) {
                    helper.toast("error", dataAuthor.payload.data.message);
                }
                const datasup = await dispatch(getAllSupplier());
                if (datasup.payload?.data) {
                    setSuppliers(datasup.payload.data);
                }
                if (datasup.payload.data?.errorCode) {
                    helper.toast("error", datasup.payload.data.message);
                }
                const data = await dispatch(getAllFormBook());
                if (data.payload?.data) {
                    setFormBooks(data.payload.data);
                }
                if (data.payload.data?.errorCode) {
                    helper.toast("error", data.payload.data.message);
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    // Lọc theo tác giả
    useEffect(() => {
        (async () => {
            if (selectedAuthor != "All") {
                setObjSearch({
                    ...objSearch,
                    search: valueInput,
                    authors: selectedAuthor,
                });
                const { payload } = await dispatch(
                    searchProduct({
                        ...objSearch,
                        search: valueInput,
                        authors: selectedAuthor,
                    })
                );
                const filteredAuthor = payload?.data?.data;
                setDataSearch(filteredAuthor);
            } else {
                setObjSearch({
                    ...objSearch,
                    search: valueInput,
                    authors: "",
                });
                const { payload } = await dispatch(
                    searchProduct({
                        ...objSearch,
                        search: valueInput,
                        authors: "",
                    })
                );

                setDataSearch(payload?.data?.data);
            }
        })();
    }, [selectedAuthor]);
    //Lọc theo giá
    useEffect(() => {
        (async () => {
            if (selectedPrices != "None") {
                setObjSearch({
                    ...objSearch,
                    search: valueInput,
                    price: selectedPrices,
                });
                const { payload } = await dispatch(
                    searchProduct({
                        // ...prev, "search": e.target.value
                        ...objSearch,
                        search: valueInput,
                        price: selectedPrices,
                    })
                );
                const filteredPrices = payload?.data?.data;
                setDataSearch(filteredPrices);
            } else {
                setObjSearch({
                    ...objSearch,
                    search: valueInput,
                    price: "",
                });
                const { payload } = await dispatch(
                    searchProduct({
                        ...objSearch,
                        search: valueInput,
                        price: "",
                    })
                );

                setDataSearch(payload?.data?.data);
            }
        })();
    }, [selectedPrices]);
    //Lọc theo nhà cung cấp
    useEffect(() => {
        (async () => {
            if (selectedSuppliers != "All") {
                setObjSearch({
                    // ...prev, "search": e.target.value
                    ...objSearch,
                    search: valueInput,
                    supplieres: selectedSuppliers,
                });
                const { payload } = await dispatch(
                    searchProduct({
                        // ...prev, "search": e.target.value
                        ...objSearch,
                        search: valueInput,
                        supplieres: selectedSuppliers,
                    })
                );
                const filteredSuppliers = payload?.data?.data;
                setDataSearch(filteredSuppliers);
            } else {
                setObjSearch({
                    ...objSearch,
                    search: valueInput,
                    supplieres: "",
                });
                const { payload } = await dispatch(
                    searchProduct({
                        ...objSearch,
                        search: valueInput,
                        supplieres: "",
                    })
                );

                setDataSearch(payload?.data?.data);
            }
        })();
    }, [selectedSuppliers]);
    useEffect(() => {
        (async () => {
            if (selectedFormBook != "All") {
                setObjSearch({
                    ...objSearch,
                    search: valueInput,
                    formbooks: selectedFormBook,
                });
                const { payload } = await dispatch(
                    searchProduct({
                        ...objSearch,
                        search: valueInput,
                        formbooks: selectedFormBook,
                    })
                );
                const filteredFormBooks = payload?.data?.data;
                setDataSearch(filteredFormBooks);
            } else {
                setObjSearch({
                    ...objSearch,
                    search: valueInput,
                    formbooks: "",
                });
                const { payload } = await dispatch(
                    searchProduct({
                        ...objSearch,
                        search: valueInput,
                        formbooks: "",
                    })
                );

                setDataSearch(payload?.data?.data);
            }
        })();
    }, [selectedFormBook]);
    return (
        <div className="w-full sm:w-1/4 p-4 bg-white">
            <div className="mb-4">
                <div>
                    <p className="text-semibold">Tác giả</p>
                    {authors?.map((itemAuthor, index) => (
                        <div
                            key={index.toString()}
                            className="flex items-center ml-4 mt-2"
                        >
                            <input
                                id={itemAuthor?._id}
                                type="radio"
                                className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out rounded-none"
                                name="radio-group-author"
                                onChange={() => {
                                    setSelectedAuthor(itemAuthor?._id);
                                }}
                                onClick={(e) => {
                                    if (itemAuthor?._id == selectedAuthor) {
                                        setSelectedAuthor("All");
                                    }
                                }}
                                checked={
                                    selectedAuthor == "All"
                                        ? false
                                        : selectedAuthor == itemAuthor?._id
                                }
                            />
                            <label htmlFor={itemAuthor?._id} className="ml-3">
                                <span className="block text-sm font-sm leading-5 text-gray-700">
                                    {itemAuthor?.name}
                                </span>
                            </label>
                        </div>
                    ))}
                    <hr className="m-2" />
                </div>
                <div>
                    <p className="text-semibold">Giá</p>
                    {prices?.map((price, index) => (
                        <div
                            key={index.toString()}
                            className="flex items-center ml-4 mt-2"
                        >
                            <input
                                id={price?.value}
                                type="radio"
                                className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out rounded-none"
                                name="radio-group-price"
                                onChange={() => {
                                    setSelectedPrices(price?.value);
                                }}
                                onClick={(e) => {
                                    if (price?.value == selectedPrices) {
                                        setSelectedPrices("None");
                                    }
                                }}
                                checked={
                                    selectedPrices == "None"
                                        ? false
                                        : selectedPrices == price?.value
                                }
                            />
                            <label htmlFor={price?.value} className="ml-3">
                                <span className="block text-sm font-sm leading-5 text-gray-700">
                                    {price?.name}
                                </span>
                            </label>
                        </div>
                    ))}
                </div>
                <hr className="mt-4 mb-4" />
                <div>
                    <p className="text-semibold">Nhà cung cấp</p>
                    {suppliers?.map((itemSuppliers, index) => (
                        <div
                            key={index.toString()}
                            className="flex items-center ml-4 mt-2"
                        >
                            <input
                                id={itemSuppliers?._id}
                                type="radio"
                                className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out rounded-none"
                                name="radio-group-publish"
                                onChange={() => {
                                    setSelectedSuppliers(itemSuppliers?._id);
                                }}
                                onClick={(e) => {
                                    if (
                                        itemSuppliers?._id == selectedSuppliers
                                    ) {
                                        setSelectedSuppliers("All");
                                    }
                                }}
                                checked={
                                    selectedSuppliers == "All"
                                        ? false
                                        : selectedSuppliers ==
                                          itemSuppliers?._id
                                }
                            />
                            <label
                                htmlFor={itemSuppliers?._id}
                                className="ml-3"
                            >
                                <span className="block text-sm font-sm leading-5 text-gray-700">
                                    {itemSuppliers?.name}
                                </span>
                            </label>
                        </div>
                    ))}
                </div>
                <hr className="mt-4 mb-4" />

                <div>
                    <p className="text-semibold">Hình thức</p>
                    {formBooks?.map((itemFormBook, index) => (
                        <div
                            key={index.toString()}
                            className="flex items-center ml-4 mt-2"
                        >
                            <input
                                id={itemFormBook?._id}
                                type="radio"
                                className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out rounded-none"
                                name="radio-group-formbook"
                                onChange={() => {
                                    setSelectedFormBook(itemFormBook?._id);
                                }}
                                onClick={(e) => {
                                    if (itemFormBook?._id == selectedFormBook) {
                                        setSelectedFormBook("All");
                                    }
                                }}
                                checked={
                                    selectedFormBook == "All"
                                        ? false
                                        : selectedFormBook == itemFormBook?._id
                                }
                            />
                            <label htmlFor={itemFormBook?._id} className="ml-3">
                                <span className="block text-sm font-sm leading-5 text-gray-700">
                                    {itemFormBook.name}
                                </span>
                            </label>
                        </div>
                    ))}
                </div>
                <hr className="mt-4 mb-4" />
            </div>
        </div>
    );
}
