import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchProduct } from "../../slice/productsSlice";

import SideBarFilter from "./components/sideBarFilter";
import IsSearchList from "./components/isSearchList";

const PageSearch = () => {
    const dispatch = useDispatch();
    const [dataSearch, setDataSearch] = useState([]);
    const [searchParams] = useSearchParams();
    const [valueInput, setValueInput] = useState(searchParams.get("q"));
    const [onHaveResult, setOnHaveResult] = useState(true);
    const [objSearch, setObjSearch] = useState({
        search: valueInput,
        price: "",
        authors: "",
        formbooks: "",
        supplieres: "",
    });

    useEffect(() => {
        setValueInput(searchParams.get("q"));
    }, [searchParams]);

    useEffect(() => {
        if (dataSearch.length >= 1) {
            setOnHaveResult(true);
        }
    }, [dataSearch]);

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
                setOnHaveResult(false);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [valueInput]);

    return (
        <div>
            <div className="my-5">
                <div className="flex flex-col sm:flex-row">
                    {onHaveResult && (
                        <SideBarFilter
                            setDataSearch={setDataSearch}
                            setObjSearch={setObjSearch}
                            objSearch={objSearch}
                            valueInput={valueInput}
                        />
                    )}

                    <div className="w-full sm:w-3/4 p-4 bg-white ml-0 sm:ml-2">
                        <p className="inline m-2 text-lg font-medium">
                            KẾT QUẢ TÌM KIẾM VỚI :{" "}
                            <p className="inline text-lg text-orange-600 font-medium">
                                {valueInput.toUpperCase()}
                            </p>{" "}
                        </p>
                        {dataSearch?.length == 0 ? (
                            <div className="">
                                <div className="m-2 border-[1px] border-[#fcd344] bg-[#fafaec]">
                                    <h3 className="text-[#3d6611] text-sm font-medium pl-2 p-4">
                                        Không có sản phẩm nào phù hợp với từ
                                        khóa tìm kiếm của bạn
                                    </h3>
                                </div>
                            </div>
                        ) : (
                            <IsSearchList data={dataSearch} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PageSearch;
