import React, { useEffect, useState } from "react";
import "./index.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCategory } from "../../slice/categorySlice";
import helper from "../../utiliti/helper/helper";

const SeriesBook = () => {
    const [series, setSeries] = useState();
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            const { payload } = await dispatch(getCategory(id));
            // console.log("phuc", payload);
            setSeries(payload);
        })();
    }, []);
    return (
        <div>
            <div className="my-5">
                {series?.series.length > 0 ? (
                    <>
                        <div className="bg-[#cff2fc] mb-2">
                            <div className="flex py-3 px-3">
                                <div className="mr-3">
                                    <img
                                        src="https://i.imgur.com/aEOCgNo.png"
                                        className="w-6 h-6"
                                        alt=""
                                    />
                                </div>
                                <div className="font-bold text-lg text-[#289aef]">
                                    SERIES BỘ
                                </div>
                            </div>
                        </div>
                        {series?.series.map((seri, index) => (
                            <div key={index} className="bg-[#FFFF] mb-10">
                                <div className="flex p-3">
                                    <div className="w-[30%] ml-3">
                                        <img
                                            src={seri.image[0]}
                                            alt=""
                                            className="w-[100%] h-[100%] m-auto"
                                        />
                                    </div>
                                    <div className="md:flex w-[70%]">
                                        <div className="md:w-[65%] w-[100%] ml-5 md:h-[40%] m-auto">
                                            <div className="flex mb-2">
                                                <div className="mr-3 mt-[1px]">
                                                    <img
                                                        src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/label_Bo.svg"
                                                        className="w-6 h-6"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="font-medium text-base">
                                                    {seri.name}
                                                </div>
                                            </div>
                                            <div className="mb-2">
                                                Tác giả:
                                                {seri.author}
                                            </div>
                                            <div className="mb-2">
                                                Nhà xuất bản:
                                                {seri.publishing}
                                            </div>
                                            <div className="text-[#2F80ED]">
                                                {seri.follow &&
                                                    `${seri.follow} lượt theo dõi`}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                ) : null}

                <div className="bg-[#FCDAB0] mb-1">
                    <div className="flex py-3 px-3">
                        <div className="mr-3 mt-[2px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                className="bi bi-book text-green-600"
                                viewBox="0 0 16 16"
                            >
                                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                            </svg>
                        </div>
                        <div className="font-bold text-base pt-1 text-green-600">
                            {series?.data.name}
                        </div>
                    </div>
                </div>

                <div className="bg-white p-2">
                    {series?.product?.length == 0 ? (
                        <span>Không có sản phẩm nào</span>
                    ) : (
                        <div className="grid md:grid-cols-5 grid-cols-3 gap-2 md:mx-2">
                            {series?.product.map((product) => (
                                <div
                                    key={product._id}
                                    className="relative hover:border-2 hover:shadow-md"
                                >
                                    <div className="md:m-2 m-2">
                                        <Link to={`/detail/${product._id}`}>
                                            <img
                                                src={product.productImage[0]}
                                                alt=""
                                            />
                                        </Link>
                                    </div>
                                    <div className="mb-3">
                                        <Link to={`/detail/${product._id}`}>
                                            <h4 className="text-[#333333] md:text-lg text-base md:px-5 px-3 text-h4">
                                                {product.name}
                                            </h4>
                                            <div className="flex">
                                                <span className="block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold">
                                                    {product.sale}
                                                </span>
                                                <span className="rounded-md bg-[#C92127] text-white text-xs font-bold w-10 h-6 pt-[1px] text-center">
                                                    -
                                                    {helper.calculatePercentage(
                                                        product.price,
                                                        product.sale
                                                    )}
                                                    %
                                                </span>
                                            </div>
                                            <span className="block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through">
                                                {product.price}
                                            </span>
                                            <span className="block md:px-5 px-3 text-sm md:text-xs">
                                                Số lượng còn lại:{" "}
                                                {product.quantity}
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            ))}

                            <div className="relative md:hidden block py-[100%] px-5">
                                <div className="border-2 rounded-2xl text-center p-1 border-teal-400">
                                    <button className="text-teal-500 hover:text-orange-400">
                                        Xem Thêm
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SeriesBook;
