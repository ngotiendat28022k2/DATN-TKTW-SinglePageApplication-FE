import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../../slice/productsSlice";
import { Link } from "react-router-dom";
import { getAllFormBook } from "../../slice/formBookSlice";
import helper from "../../utiliti/helper/helper";
import { getAllSupplier } from "../../slice/supplieresSlice";
import { getAllAuthor } from "../../slice/authorSlice";

const PageSearch = () => {
    const dispatch = useDispatch();
    const [dataSearch, setDataSearch] = useState([]);
    const [prices, setPrices] = useState([
        { name: "Dưới 150,000đ", value: "0,150000" },
        { name: "Từ 150,000đ - 300,000đ", value: "150000,300000" },
        { name: "Từ 300,000đ - 500,000đ", value: "300000,500000" },
        { name: "Từ 500,000đ - 700,000đ", value: "500000,700000" },
        { name: "Trên 700,000đ", value: "700000" },
    ]);
    const [selectedPrices, setSelectedPrices] = useState("None");
    const [searchParams, setSearchParams] = useSearchParams();
    const [formBooks, setFormBooks] = useState([]);
    const [selectedFormBook, setSelectedFormBook] = useState("All");
    const [suppliers, setSuppliers] = useState([]);
    const [selectedSuppliers, setSelectedSuppliers] = useState("All");
    const [authors, setAuthors] = useState([]);
    const [selectedAuthor, setSelectesAuthor] = useState("All");
    const [valueInput, setValueInput] = useState(searchParams.get("q"));
    const [objSearch, setObjSearch] = useState({
        search: valueInput,
        price: "",
        authors: "",
        formbooks: "",
        supplieres: "",
    });

    //     console.log("valueInput2", valueInput);
    useEffect(() => {
        setValueInput(searchParams.get("q"));
    }, [searchParams]);

    useEffect(() => {
        (async () => {
            try {
                setObjSearch({
                    // ...prev, "search": e.target.value
                    ...objSearch,
                    search: valueInput,
                });
                // console.log("2", objSearch);

                const { payload } = await dispatch(
                    searchProduct({
                        ...objSearch,
                        search: valueInput,
                    })
                );

                setDataSearch(payload.data?.data);
                console.log("payload", payload?.data?.data);
                console.log("payload1", dataSearch);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [valueInput]);

    //Hình thức sách
    // const formbooks = useSelector((state) => state.formbooks.value);
    // console.log("formbook", formbooks);
    useEffect(() => {
        (async () => {
            try {
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

    //Lọc theo hình thức sách
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

    console.log("formbooks", formBooks);

    // Tác giả
    // const authors = useSelector((state) => state.authors.value);
    // console.log("authors", authors);
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

    //Nhà cung cấp
    // const supplier = useSelector((state) => state.supplier.value);
    // console.log("supplier", supplier);

    useEffect(() => {
        (async () => {
            try {
                const datasup = await dispatch(getAllSupplier());
                if (datasup.payload?.data) {
                    setSuppliers(datasup.payload.data);
                }
                if (datasup.payload.data?.errorCode) {
                    helper.toast("error", datasup.payload.data.message);
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

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

    return (
        <div>
            <div className="my-5">
                <em className="m-2 text-lg font-light">
                    KẾT QUẢ TÌM KIẾM VỚI :{" "}
                    <em className="text-lg text-orange-600 font-light">
                        {valueInput.toUpperCase()}
                    </em>{" "}
                </em>
                <div className="flex flex-col sm:flex-row">
                    {dataSearch?.length > 0 ? (
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
                                                name="radio-group-publish"
                                                onChange={() => {
                                                    setSelectesAuthor(
                                                        itemAuthor?._id
                                                    );
                                                }}
                                                onClick={(e) => {
                                                    if (
                                                        itemAuthor?._id ==
                                                        selectedAuthor
                                                    ) {
                                                        setSelectesAuthor(
                                                            "All"
                                                        );
                                                    }
                                                }}
                                                checked={
                                                    selectedAuthor == "All"
                                                        ? false
                                                        : selectedAuthor ==
                                                          itemAuthor?._id
                                                }
                                            />
                                            <label
                                                htmlFor={itemAuthor?._id}
                                                className="ml-3"
                                            >
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
                                                    setSelectedPrices(
                                                        price?.value
                                                    );
                                                }}
                                                onClick={(e) => {
                                                    if (
                                                        price?.value ==
                                                        selectedPrices
                                                    ) {
                                                        setSelectedPrices(
                                                            "None"
                                                        );
                                                    }
                                                }}
                                                checked={
                                                    selectedPrices == "None"
                                                        ? false
                                                        : selectedPrices ==
                                                          price?.value
                                                }
                                            />
                                            <label
                                                htmlFor={price?.value}
                                                className="ml-3"
                                            >
                                                <span className="block text-sm font-sm leading-5 text-gray-700">
                                                    {price?.name}
                                                </span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                <hr className="mt-4 mb-4" />
                                <div>
                                    <p className="text-semibold">
                                        Nhà cung cấp
                                    </p>
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
                                                    setSelectedSuppliers(
                                                        itemSuppliers?._id
                                                    );
                                                }}
                                                onClick={(e) => {
                                                    if (
                                                        itemSuppliers?._id ==
                                                        selectedSuppliers
                                                    ) {
                                                        setSelectedSuppliers(
                                                            "All"
                                                        );
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
                                                    setSelectedFormBook(
                                                        itemFormBook?._id
                                                    );
                                                }}
                                                onClick={(e) => {
                                                    if (
                                                        itemFormBook?._id ==
                                                        selectedFormBook
                                                    ) {
                                                        setSelectedFormBook(
                                                            "All"
                                                        );
                                                    }
                                                }}
                                                checked={
                                                    selectedFormBook == "All"
                                                        ? false
                                                        : selectedFormBook ==
                                                          itemFormBook?._id
                                                }
                                            />
                                            <label
                                                htmlFor={itemFormBook?._id}
                                                className="ml-3"
                                            >
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
                    ) : null}

                    <div className="w-full sm:w-3/4 p-4 bg-white ml-0 sm:ml-2">
                        {dataSearch?.length == 0 ? (
                            <div className="">
                                <p className="inline m-2 text-lg font-medium">
                                    KẾT QUẢ TÌM KIẾM VỚI :{" "}
                                    <p className="inline text-lg text-orange-600 font-medium">
                                        {valueInput.toUpperCase()}
                                    </p>{" "}
                                </p>
                                <div className="m-2 border-[1px] border-[#fcd344] bg-[#fafaec]">
                                    <h3 className="text-[#3d6611] text-sm font-medium pl-2 p-4">
                                        Không có sản phẩm nào phù hợp với từ
                                        khóa tìm kiếm của bạn
                                    </h3>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="mb-4">
                                    <p className="inline m-2 text-lg font-medium">
                                        KẾT QUẢ TÌM KIẾM VỚI :{" "}
                                        <p className="inline text-lg text-orange-600 font-medium">
                                            {valueInput.toUpperCase()}
                                        </p>{" "}
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {dataSearch?.map((value, index) => (
                                        <div
                                            key={index.toString()}
                                            className="relative hover:border-2 hover:shadow-md"
                                        >
                                            <div className="md:m-2 m-2">
                                                <Link
                                                    to={`/detail/${value._id}`}
                                                >
                                                    <img
                                                        src={
                                                            value
                                                                ?.productImage[0]
                                                        }
                                                        alt=""
                                                    />
                                                </Link>
                                            </div>
                                            <div className="mb-3">
                                                <Link
                                                    to={`/detail/${value._id}`}
                                                >
                                                    <h4 className="text-[#333333] md:text-lg text-base md:px-5 px-3">
                                                        {value?.name}
                                                    </h4>
                                                    <span className="block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold">
                                                        {value?.sale?.toLocaleString(
                                                            "vi",
                                                            {
                                                                style: "currency",
                                                                currency: "VND",
                                                            }
                                                        )}
                                                    </span>
                                                    <span className="block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through">
                                                        {value?.price?.toLocaleString(
                                                            "vi",
                                                            {
                                                                style: "currency",
                                                                currency: "VND",
                                                            }
                                                        )}
                                                    </span>
                                                    <span className="block md:px-5 px-3 text-sm md:text-xs">
                                                        Đã bán: {value?.view}
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PageSearch;
